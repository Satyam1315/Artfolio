import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        publicId: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: true,
      enum: [
        "illustration",
        "design",
        "photography",
        "digital-art",
        "3d-modeling",
        "animation",
        "other",
      ],
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    projectUrl: {
      type: String,
      default: "",
    },
    client: {
      type: String,
      default: "",
    },
    completionDate: {
      type: Date,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
projectSchema.index({ user: 1, createdAt: -1 });
projectSchema.index({ category: 1 });

const Project = mongoose.model("Project", projectSchema);

export default Project;
