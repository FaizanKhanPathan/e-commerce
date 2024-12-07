module.exports = {
  verifyOtp: (otp) => `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <header style="text-align: center; padding: 20px;">
          <img src="https://your-logo-url.com/logo.png" alt="Your Company Logo" style="max-width: 200px;" />
        </header>
        <h1 style="color: #4CAF50;">Email Verification</h1>
        <p>Hello,</p>
        <p>Thank you for registering with us! To verify your email address, please use the following One-Time Password (OTP):</p>
        <p style="font-size: 18px; font-weight: bold;">${otp}</p>
        <p>The OTP will expire in 10 minutes. If you did not request this, please ignore this message.</p>
  
        <footer style="margin-top: 30px; text-align: center;">
          <p>Best regards,<br />GMT</p>
          <p>Follow us:</p>
          <p>
            <a href="https://facebook.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/facebook-icon.png" alt="Facebook" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://twitter.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/twitter-icon.png" alt="Twitter" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" style="width: 24px; height: 24px;" />
            </a>
          </p>
          <p>For support, email us at: <a href="mailto: sales@neocellularparts.com"> sales@neocellularparts.com</a></p>
          <p> 5659 Buford Hwy Ste# 108-111,
                        <br />
                        Doraville, GA 30340, United States</p>
        </footer>
      </div>
    `,

  registerSuccess: (name) => `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <header style="text-align: center; padding: 20px;">
          <img src="https://your-logo-url.com/logo.png" alt="Your Company Logo" style="max-width: 200px;" />
        </header>
        <h1 style="color: #4CAF50;">Welcome to Our Platform, ${name}!</h1>
        <p>We are excited to have you on board. Your account has been successfully created.</p>
        <p>You can now enjoy all the features and benefits of our platform. If you have any questions, feel free to contact us anytime.</p>
        <p>Thank you for choosing us!</p>
  
        <footer style="margin-top: 30px; text-align: center;">
          <p>Best regards,<br />GMT</p>
          <p>Follow us:</p>
          <p>
            <a href="https://facebook.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/facebook-icon.png" alt="Facebook" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://twitter.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/twitter-icon.png" alt="Twitter" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" style="width: 24px; height: 24px;" />
            </a>
          </p>
          <p>For support, email us at: <a href="mailto:sales@neocellularparts.com"> sales@neocellularparts.com</a></p>
          <p> 5659 Buford Hwy Ste# 108-111,
                        <br />
                        Doraville, GA 30340, United States</p>
        </footer>
      </div>
    `,

  resetPassword: (link) => `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <header style="text-align: center; padding: 20px;">
          <img src="https://your-logo-url.com/logo.png" alt="Your Company Logo" style="max-width: 200px;" />
        </header>
        <h1 style="color: #4CAF50;">Reset Your Password</h1>
        <p>Hello,</p>
        <p>We received a request to reset your password. To complete the process, click the link below:</p>
        <p>
          <a href="${link}" style="color: #007BFF;">Reset My Password</a>
        </p>
        <p>If you did not request a password reset, please disregard this email. Your password will remain unchanged.</p>
  
        <footer style="margin-top: 30px; text-align: center;">
          <p>Best regards,<br />GMT</p>
          <p>Follow us:</p>
          <p>
            <a href="https://facebook.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/facebook-icon.png" alt="Facebook" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://twitter.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/twitter-icon.png" alt="Twitter" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" style="width: 24px; height: 24px;" />
            </a>
          </p>
          <p>For support, email us at: <a href="mailto: sales@neocellularparts.com"> sales@neocellularparts.com</a></p>
          <p> 5659 Buford Hwy Ste# 108-111,
                        <br />
                        Doraville, GA 30340, United States</p>
        </footer>
      </div>
    `,
  resetPasswordSuccess: (name) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <header style="text-align: center; padding: 20px;">
      <img src="https://your-logo-url.com/logo.png" alt="Your Company Logo" style="max-width: 200px;" />
    </header>
    <h1 style="color: #4CAF50;">Password Reset Successful</h1>
    <p>Hello ${name},</p>
    <p>We are happy to inform you that your password has been successfully reset. You can now log in with your new password.</p>
    <p>If you did not request a password reset, please contact our support team immediately.</p>

    <footer style="margin-top: 30px; text-align: center;">
      <p>Best regards,<br />GMT</p>
      <p>Follow us:</p>
      <p>
        <a href="https://facebook.com/yourcompany" target="_blank" style="margin-right: 10px;">
          <img src="https://example.com/facebook-icon.png" alt="Facebook" style="width: 24px; height: 24px;" />
        </a>
        <a href="https://twitter.com/yourcompany" target="_blank" style="margin-right: 10px;">
          <img src="https://example.com/twitter-icon.png" alt="Twitter" style="width: 24px; height: 24px;" />
        </a>
        <a href="https://linkedin.com/company/yourcompany" target="_blank" style="margin-right: 10px;">
          <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" style="width: 24px; height: 24px;" />
        </a>
      </p>
      <p>For support, email us at: <a href="mailto: sales@neocellularparts.com"> sales@neocellularparts.com</a></p>
      <p> 5659 Buford Hwy Ste# 108-111,
                        <br />
                        Doraville, GA 30340, United States</p>
    </footer>
  </div>
`,

  forgotPassword: (otp) => `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <header style="text-align: center; padding: 20px;">
          <img src="https://your-logo-url.com/logo.png" alt="Your Company Logo" style="max-width: 200px;" />
        </header>
        <h1 style="color: #4CAF50;">Forgot Password</h1>
        <p>Hello,</p>
        <p>You requested to reset your password. Please use the following One-Time Password (OTP) to proceed:</p>
        <p style="font-size: 18px; font-weight: bold;">${otp}</p>
        <p>This OTP will expire in 10 minutes. If you did not request this, please ignore this email.</p>
  
        <footer style="margin-top: 30px; text-align: center;">
          <p>Best regards,<br />GMT</p>
          <p>Follow us:</p>
          <p>
            <a href="https://facebook.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/facebook-icon.png" alt="Facebook" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://twitter.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/twitter-icon.png" alt="Twitter" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" style="width: 24px; height: 24px;" />
            </a>
          </p>
          <p>For support, email us at: <a href="mailto: sales@neocellularparts.com"> sales@neocellularparts.com</a></p>
          <p> 5659 Buford Hwy Ste# 108-111,
                        <br />
                        Doraville, GA 30340, United States</p>
        </footer>
      </div>
    `,

  createOrder: (orderId, orderDetails) => `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <header style="text-align: center; padding: 20px;">
          <img src="https://your-logo-url.com/logo.png" alt="Your Company Logo" style="max-width: 200px;" />
        </header>
        <h1 style="color: #4CAF50;">Order Confirmation</h1>
        <p>Hello,</p>
        <p>Thank you for your order. Your order number is <strong>#${orderId}</strong>. Here are the details of your order:</p>
        <p>${orderDetails}</p>
  
        <footer style="margin-top: 30px; text-align: center;">
          <p>Best regards,<br />GMT</p>
          <p>Follow us:</p>
          <p>
            <a href="https://facebook.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/facebook-icon.png" alt="Facebook" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://twitter.com/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/twitter-icon.png" alt="Twitter" style="width: 24px; height: 24px;" />
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" style="margin-right: 10px;">
              <img src="https://example.com/linkedin-icon.png" alt="LinkedIn" style="width: 24px; height: 24px;" />
            </a>
          </p>
          <p>For support, email us at: <a href="mailto: sales@neocellularparts.com"> sales@neocellularparts.com</a></p>
          <p> 5659 Buford Hwy Ste# 108-111,
                        <br />
                        Doraville, GA 30340, United States</p>
        </footer>
      </div>
    `,
};
