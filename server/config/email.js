import mailjet from "node-mailjet";

// Mailjet client configuration
export const getMailjetClient = () => {
  return mailjet.apiConnect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
  );
};

// Verify API keys are configured
export const verifyEmailConnection = async () => {
  try {
    if (!process.env.MAILJET_API_KEY || !process.env.MAILJET_SECRET_KEY) {
      throw new Error("MAILJET_API_KEY or MAILJET_SECRET_KEY is not configured");
    }
    console.log("✅ Email service configured successfully");
    console.log("📧 Mailjet API: Send API v3.1");
  } catch (err) {
    console.error("❌ Email service configuration error:", err.message);
    console.error("⚠️  Please check your MAILJET_API_KEY and MAILJET_SECRET_KEY in .env file");
  }
};
