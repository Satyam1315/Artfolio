export const welcomeEmailTemplate = (userName) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Artist Portfolio</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
                    
                    <!-- Header with artistic pattern -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); padding: 70px 40px; text-align: center; position: relative;">
                            <div style="background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.08"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.4;"></div>
                            <div style="background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 70%); position: absolute; top: 0; left: 0; right: 0; bottom: 0;"></div>
                            <div style="font-size: 64px; margin-bottom: 15px; position: relative; z-index: 1; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">🎨</div>
                            <h1 style="margin: 0; color: #ffffff; font-size: 42px; font-weight: 800; letter-spacing: -1.5px; position: relative; z-index: 1; text-shadow: 0 2px 30px rgba(0,0,0,0.3);">
                                Welcome to Artist Portfolio
                            </h1>
                            <p style="margin: 15px 0 0 0; color: rgba(255,255,255,0.95); font-size: 16px; position: relative; z-index: 1; text-shadow: 0 1px 10px rgba(0,0,0,0.2);">
                                Your creative journey starts here
                            </p>
                            <div style="margin-top: 25px; height: 5px; width: 100px; background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.3)); margin-left: auto; margin-right: auto; border-radius: 10px; box-shadow: 0 2px 15px rgba(255,255,255,0.4);"></div>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 50px 40px;">
                            <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 28px; font-weight: 600;">
                                Hello ${userName}! 👋
                            </h2>
                            
                            <p style="margin: 0 0 20px 0; color: #4a5568; font-size: 16px; line-height: 1.8;">
                                Congratulations on joining our creative community! Your account has been successfully created, and you're now ready to showcase your amazing work to the world.
                            </p>
                            
                            <!-- Feature boxes -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 35px 0;">
                                <tr>
                                    <td style="padding: 25px 28px; background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%); border-left: 5px solid #667eea; border-radius: 12px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="50" align="center" valign="middle" style="padding-right: 20px;">
                                                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3); font-size: 24px; line-height: 50px; text-align: center;">
                                                        🖼️
                                                    </div>
                                                </td>
                                                <td valign="middle">
                                                    <h3 style="margin: 0 0 10px 0; color: #1a1a1a; font-size: 19px; font-weight: 700; letter-spacing: -0.3px;">
                                                        Create Your Portfolio
                                                    </h3>
                                                    <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.7;">
                                                        Upload your projects, showcase your skills, and let your creativity shine.
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr><td style="height: 18px;"></td></tr>
                                <tr>
                                    <td style="padding: 25px 28px; background: linear-gradient(135deg, #fef3ff 0%, #fbe9ff 100%); border-left: 5px solid #a855f7; border-radius: 12px; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.15);">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="50" align="center" valign="middle" style="padding-right: 20px;">
                                                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3); font-size: 24px; line-height: 50px; text-align: center;">
                                                        🌟
                                                    </div>
                                                </td>
                                                <td valign="middle">
                                                    <h3 style="margin: 0 0 10px 0; color: #1a1a1a; font-size: 19px; font-weight: 700; letter-spacing: -0.3px;">
                                                        Build Your Brand
                                                    </h3>
                                                    <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.7;">
                                                        Customize your profile, share your story, and connect with potential clients.
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr><td style="height: 18px;"></td></tr>
                                <tr>
                                    <td style="padding: 25px 28px; background: linear-gradient(135deg, #fff0f5 0%, #ffe8f0 100%); border-left: 5px solid #ec4899; border-radius: 12px; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.15);">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="50" align="center" valign="middle" style="padding-right: 20px;">
                                                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3); font-size: 24px; line-height: 50px; text-align: center;">
                                                        🚀
                                                    </div>
                                                </td>
                                                <td valign="middle">
                                                    <h3 style="margin: 0 0 10px 0; color: #1a1a1a; font-size: 19px; font-weight: 700; letter-spacing: -0.3px;">
                                                        Get Discovered
                                                    </h3>
                                                    <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.7;">
                                                        Your work will be visible in our explore section for everyone to see.
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 30px 0 20px 0; color: #4a5568; font-size: 16px; line-height: 1.8;">
                                Ready to get started? Log in to your dashboard and begin building your online presence.
                            </p>
                            
                            <!-- CTA Button -->
                            <table cellpadding="0" cellspacing="0" style="margin: 35px auto;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 18px 50px; text-align: center; box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);">
                                        <a href="${process.env.CLIENT_URL}/login" style="color: #ffffff; text-decoration: none; font-size: 17px; font-weight: 700; letter-spacing: 0.3px; text-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                                            Get Started Now →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Decorative divider -->
                    <tr>
                        <td style="padding: 0 40px;">
                            <div style="height: 2px; background: linear-gradient(90deg, transparent, #e5e7eb, transparent);"></div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 40px; text-align: center; background-color: #f9fafb;">
                            <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
                                Need help? We're here for you!
                            </p>
                            <p style="margin: 0 0 20px 0; color: #9ca3af; font-size: 13px;">
                                If you have any questions, feel free to reach out to our support team.
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                © 2025 Artist Portfolio. All rights reserved.
                            </p>
                            <p style="margin: 10px 0 0 0; color: #cbd5e0; font-size: 11px;">
                                You're receiving this email because you registered an account.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
};

export const resetPasswordEmailTemplate = (userName, resetLink) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
                    
                    <!-- Header with lock icon pattern -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #f43f5e 0%, #dc2626 50%, #991b1b 100%); padding: 70px 40px; text-align: center; position: relative;">
                            <div style="background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.06"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.3;"></div>
                            <div style="background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%); position: absolute; top: 0; left: 0; right: 0; bottom: 0;"></div>
                            <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1)); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 50px; box-shadow: 0 8px 30px rgba(0,0,0,0.3); position: relative; z-index: 1; line-height: 80px; text-align: center;">🔐</div>
                            <h1 style="margin: 0; color: #ffffff; font-size: 40px; font-weight: 800; letter-spacing: -1.5px; position: relative; z-index: 1; text-shadow: 0 2px 30px rgba(0,0,0,0.3);">
                                Password Reset
                            </h1>
                            <p style="margin: 15px 0 0 0; color: rgba(255,255,255,0.95); font-size: 16px; position: relative; z-index: 1; text-shadow: 0 1px 10px rgba(0,0,0,0.2);">
                                Secure your account with a new password
                            </p>
                            <div style="margin-top: 25px; height: 5px; width: 100px; background: linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,0.2)); margin-left: auto; margin-right: auto; border-radius: 10px; box-shadow: 0 2px 15px rgba(255,255,255,0.3);"></div>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 50px 40px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 25px; background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); border-radius: 12px; border-left: 5px solid #f43f5e;">
                                        <h2 style="margin: 0 0 12px 0; color: #991b1b; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                            Hello ${userName},
                                        </h2>
                                        <p style="margin: 0; color: #7f1d1d; font-size: 16px; line-height: 1.8; font-weight: 500;">
                                            We received a request to reset your password for your Artist Portfolio account.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 0 0 25px 0; color: #374151; font-size: 16px; line-height: 1.8;">
                                Don't worry! Resetting your password is easy. Just click the button below to create a new secure password and regain access to your account.
                            </p>
                            
                            <!-- Alert box -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 35px 0;">
                                <tr>
                                    <td style="padding: 22px 25px; background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border-left: 5px solid #f59e0b; border-radius: 12px; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.15);">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="40" align="center" valign="middle" style="padding-right: 18px;">
                                                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); border-radius: 10px; box-shadow: 0 3px 10px rgba(245, 158, 11, 0.3); font-size: 20px; line-height: 40px; text-align: center;">
                                                        ⚠️
                                                    </div>
                                                </td>
                                                <td valign="middle">
                                                    <p style="margin: 0; color: #92400e; font-size: 15px; line-height: 1.7; font-weight: 500;">
                                                        <strong style="font-weight: 700;">Important:</strong> This reset link will expire in <strong>1 hour</strong> for security reasons.
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 30px 0 20px 0; color: #4a5568; font-size: 16px; line-height: 1.8;">
                                Click the button below to create a new password:
                            </p>
                            
                            <!-- CTA Button -->
                            <table cellpadding="0" cellspacing="0" style="margin: 35px auto;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #f43f5e 0%, #dc2626 100%); border-radius: 12px; padding: 18px 50px; text-align: center; box-shadow: 0 8px 25px rgba(244, 63, 94, 0.4);">
                                        <a href="${resetLink}" style="color: #ffffff; text-decoration: none; font-size: 17px; font-weight: 700; letter-spacing: 0.3px; text-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                                            Reset My Password →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 35px 0;">
                                <tr>
                                    <td style="padding: 25px; background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); border-radius: 12px; border: 2px dashed #d1d5db;">
                                        <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Or copy this link:
                                        </p>
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding: 18px 20px; background-color: #ffffff; border-radius: 8px 0 0 8px; color: #374151; font-size: 13px; word-break: break-all; font-family: 'Courier New', monospace; border: 1px solid #e5e7eb; border-right: none; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">
                                                    ${resetLink}
                                                </td>
                                                <td width="120" style="padding: 18px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 0 8px 8px 0; text-align: center; border: 1px solid #667eea;">
                                                    <a href="${resetLink}" style="color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; white-space: nowrap;">
                                                        📋 Go To Link
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Security notice -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 40px 0 0 0;">
                                <tr>
                                    <td style="padding: 28px 30px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px; border-left: 5px solid #0ea5e9; box-shadow: 0 4px 15px rgba(14, 165, 233, 0.1);">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="50" align="center" valign="middle" style="padding-right: 20px;">
                                                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3); font-size: 24px; line-height: 50px; text-align: center;">
                                                        🛡️
                                                    </div>
                                                </td>
                                                <td valign="middle">
                                                    <h3 style="margin: 0 0 15px 0; color: #0c4a6e; font-size: 18px; font-weight: 700; letter-spacing: -0.3px;">
                                                        Security Tips
                                                    </h3>
                                                    <ul style="margin: 0; padding-left: 20px; color: #0c4a6e; font-size: 15px; line-height: 1.9;">
                                                        <li style="margin-bottom: 10px;"><strong>Never share</strong> your password with anyone</li>
                                                        <li style="margin-bottom: 10px;">Use a <strong>strong, unique password</strong></li>
                                                        <li>If you didn't request this reset, <strong>ignore this email</strong></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Decorative divider -->
                    <tr>
                        <td style="padding: 0 40px;">
                            <div style="height: 2px; background: linear-gradient(90deg, transparent, #e5e7eb, transparent);"></div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 40px; text-align: center; background-color: #f9fafb;">
                            <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
                                Didn't request a password reset?
                            </p>
                            <p style="margin: 0 0 20px 0; color: #9ca3af; font-size: 13px;">
                                You can safely ignore this email. Your password will remain unchanged.
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                © 2025 Artist Portfolio. All rights reserved.
                            </p>
                            <p style="margin: 10px 0 0 0; color: #cbd5e0; font-size: 11px;">
                                This is an automated message, please do not reply.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
};
