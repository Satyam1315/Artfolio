import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import dns from "dns";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import projectRoutes from "./routes/project.js";
import { verifyCloudinaryConnection } from "./config/cloudinary.js";
import { verifyEmailConnection } from "./config/email.js";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, ".env") });

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

app.use(
  cors({
    origin: globalThis.process?.env?.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/projects", projectRoutes);

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        message: "Each image must be smaller than 10 MB.",
      });
    }

    if (err.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({
        message: "You can upload a maximum of 10 images.",
      });
    }

    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        message: "Too many files were uploaded.",
      });
    }

    return res.status(400).json({
      message: "File upload failed.",
    });
  }

  if (err) {
    return res.status(400).json({
      message: err.message || "Something went wrong.",
    });
  }

  next();
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    console.log(`📊 Database: ${mongoose.connection.name}`);
    verifyCloudinaryConnection();
    verifyEmailConnection();
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});
