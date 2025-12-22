import { v2 as cloudinary } from "cloudinary";

export const verifyCloudinaryConnection = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    // Verify connection
    await cloudinary.api.ping();
    console.log("✅ Cloudinary connected successfully");
    console.log(`☁️  Cloud Name: ${process.env.CLOUDINARY_CLOUD_NAME}`);
  } catch (err) {
    console.error("❌ Cloudinary connection error:", err.message);
    console.error("⚠️  Please check your Cloudinary credentials in .env file");
  }
};

export default cloudinary;
