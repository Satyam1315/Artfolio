import express from "express";
import User from "../models/User.js";
import Project from "../models/Project.js";
import { authenticate } from "../middleware/auth.js";
import cloudinary from "../config/cloudinary.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select(
      "name profileImage profession bio skills socialLinks location isAvailableForWork"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Convert Mongoose document to a plain object
    const userData = user.toObject();

    // Support old users whose profileImage is still stored as a string
    if (typeof userData.profileImage === "string") {
      userData.profileImage = {
        url: userData.profileImage,
        publicId: "",
      };
    }

    res.json(userData);
  } catch {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.put("/profile", authenticate, async (req, res) => {
  try {
    const {
      name,
      bio,
      skills,
      socialLinks,
      location,
      profession,
      isAvailableForWork,
    } = req.body;

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (bio !== undefined) updateData.bio = bio;
    if (skills !== undefined) updateData.skills = skills;
    if (socialLinks !== undefined) updateData.socialLinks = socialLinks;
    if (location !== undefined) updateData.location = location;
    if (profession !== undefined) updateData.profession = profession;
    if (isAvailableForWork !== undefined) updateData.isAvailableForWork = isAvailableForWork;

    const user = await User.findByIdAndUpdate(req.userId, updateData, {
      new: true,
      runValidators: true,
    }).select(
      "name email profileImage profession bio skills socialLinks location isAvailableForWork"
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post(
  "/profile-image",
  authenticate,
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No image provided" });
      }

      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const oldPublicId = user.profileImage?.publicId;

      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "artist-portfolio/profiles",
            transformation: [
              {
                width: 500,
                height: 500,
                crop: "fill",
                gravity: "face",
              },
            ],
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        uploadStream.end(req.file.buffer);
      });

      user.profileImage = {
        url: result.secure_url,
        publicId: result.public_id,
      };

      await user.save();

      // Delete the old profile image after the new image is saved
      if (oldPublicId) {
        try {
          await cloudinary.uploader.destroy(oldPublicId);
        } catch (cloudinaryError) {
          console.error(
            "Failed to delete old profile image:",
            cloudinaryError
          );
        }
      }

      res.json({
        profileImage: user.profileImage,
      });
    } catch (error) {
      console.error("Profile image upload error:", error);

      res.status(500).json({
        message: "Server error",
      });
    }
  }
);

router.delete("/profile", authenticate, async (req, res) => {
  try {
    const userId = req.userId;

    const projects = await Project.find({ user: userId });

    for (const project of projects) {
      const deletePromises = project.images
        .filter((image) => image.publicId)
        .map((image) =>
          cloudinary.uploader.destroy(image.publicId).catch((err) => {
            console.error("Error deleting image:", err);
          })
        );
      await Promise.all(deletePromises);
    }

    await Project.deleteMany({ user: userId });

    const user = await User.findById(userId);
    if (user.profileImage?.publicId) {
      try {
        await cloudinary.uploader.destroy(user.profileImage.publicId);
      } catch (err) {
        console.error("Error deleting profile image:", err);
      }
    }

    await User.findByIdAndDelete(userId);

    res.clearCookie("token");

    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Delete account error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;