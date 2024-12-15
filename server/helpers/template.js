module.exports = {
  verifyOtp: (userName,otp) => `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <header style="text-align: center; padding: 20px;">
          <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
        </header>
        <h1 style="color: #4CAF50;">Email Verification</h1>
        <p>Hello ${userName},</p>
        <p>Thank you for registering with us! To verify your email address, please use the following One-Time Password (OTP):</p>
        <p style="font-size: 18px; font-weight: bold;">${otp}</p>
        <p>The OTP will expire in 2 minutes. If you did not request this, please ignore this message.</p>
  
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
          <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
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
          <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
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
      <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
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
          <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
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
          <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
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

  paymentSuccess: (user, order) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <header style="text-align: center; padding: 20px;">
      <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
    </header>
    <h1 style="color: #4CAF50;">Payment Successful!</h1>
    <p>Dear ${user.userName},</p>
    <p>Thank you for your payment. We have successfully processed your transaction.</p>
    <table style="margin: 20px auto; border-collapse: collapse; width: 100%; max-width: 600px; border: 1px solid #ddd;">
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold;">Order ID:</td>
        <td style="padding: 10px;">${order._id}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold;">Amount Paid:</td>
        <td style="padding: 10px;">$${order.totalAmount}</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold;">Date:</td>
        <td style="padding: 10px;">${order.orderDate}</td>
      </tr>
    </table>
    <p>If you have any questions or concerns regarding your payment, feel free to contact our support team.</p>
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
      <p>For support, email us at: <a href="mailto: sales@neocellularparts.com">sales@neocellularparts.com</a></p>
      <p>5659 Buford Hwy Ste# 108-111,<br />Doraville, GA 30340, United States</p>
    </footer>
  </div>
`,
  paymentFailed: (user, order) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <header style="text-align: center; padding: 20px;">
      <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
    </header>
    <h1 style="color: #FF0000;">Payment Failed</h1>
    <p>Dear ${user.userName},</p>
    <p>We regret to inform you that your recent payment attempt was unsuccessful. Please find the details below:</p>
    <table style="margin: 20px auto; border-collapse: collapse; width: 100%; max-width: 600px; border: 1px solid #ddd;">
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold;">Order ID:</td>
        <td style="padding: 10px;">${order._id}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold;">Amount:</td>
        <td style="padding: 10px;">$${order.totalAmount}</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold;">Date:</td>
        <td style="padding: 10px;">${order.orderDate}</td>
      </tr>
    </table>
    <p>This could be due to insufficient funds, incorrect payment details, or a technical issue. We recommend the following actions:</p>
    <ul style="margin-left: 20px;">
      <li>Verify your payment details and try again.</li>
      <li>Contact your bank to ensure there are no issues with your account.</li>
      <li>Try using a different payment method.</li>
    </ul>
    <p>If you continue to experience issues, please contact our support team for assistance.</p>
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
      <p>For support, email us at: <a href="mailto: sales@neocellularparts.com">sales@neocellularparts.com</a></p>
      <p>5659 Buford Hwy Ste# 108-111,<br />Doraville, GA 30340, United States</p>
    </footer>
  </div>
`,
  createOrder: (user, order) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <header style="text-align: center; padding: 20px;">
      <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
    </header>
    <h1 style="color: #4CAF50;">Order Confirmation</h1>
    <p>Dear ${user.userName},</p> 
    <p>Thank you for your purchase! Your order has been successfully placed. Below are your order details:</p>
    <table style="margin: 20px auto; border-collapse: collapse; width: 100%; max-width: 600px; border: 1px solid #ddd;">
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold;">Order ID:</td>
        <td style="padding: 10px;">${order._id}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold;">Order Date:</td>
        <td style="padding: 10px;">${order.orderDate}</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold;">Total Amount:</td>
        <td style="padding: 10px;">$${order.totalAmount}</td>
      </tr>
    </table>
    <h2 style="margin-top: 20px;">Products Ordered:</h2>
    <table style="margin: 20px auto; border-collapse: collapse; width: 100%; max-width: 600px; border: 1px solid #ddd;">
      <thead>
        <tr style="background-color: #f1f1f1;">
          <th style="padding: 10px; text-align: left;">Product</th>
          <th style="padding: 10px; text-align: left;">Quantity</th>
          <th style="padding: 10px; text-align: left;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${order.cartItems
          .map(
            (product) => `
          <tr>
            <td style="padding: 10px;">${product.title}</td>
            <td style="padding: 10px;">${product.quantity}</td>
            <td style="padding: 10px;">$${product.price}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
    <p>Your order is being processed and will be delivered within <strong>7 working days</strong>.</p>
    <p>If you have any questions, please contact our support team.</p>
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
      <p>For support, email us at: <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
      <p>1234 Your Street, Your City, Your Country</p>
    </footer>
  </div>
`,
  deliveredOrder: (user,order) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <header style="text-align: center; padding: 20px;">
      <img src="https://techfixershop.com/assets/gmt-logo-image-BVguvJm6.png" alt="GMT Shop" style="max-width: 80px;" />
    </header>
    <h1 style="color: #4CAF50;">Order Delivered</h1>
    <p>Dear ${user.userName},</p>
    <p>We are delighted to inform you that your order has been successfully delivered on <strong>${`your location`}</strong>. Below are the details of your order:</p>
    <table style="margin: 20px auto; border-collapse: collapse; width: 100%; max-width: 600px; border: 1px solid #ddd;">
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold;">Order ID:</td>
        <td style="padding: 10px;">${order._id}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold;">Ordered Date:</td>
        <td style="padding: 10px;">${order.orderDate}</td>
      </tr>
    </table>
    <h2 style="margin-top: 20px;">Products Delivered:</h2>
    <table style="margin: 20px auto; border-collapse: collapse; width: 100%; max-width: 600px; border: 1px solid #ddd;">
      <thead>
        <tr style="background-color: #f1f1f1;">
          <th style="padding: 10px; text-align: left;">Product</th>
          <th style="padding: 10px; text-align: left;">Quantity</th>
          <th style="padding: 10px; text-align: left;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${order.cartItems.map(
            (product) => `
          <tr>
            <td style="padding: 10px;">${product.title}</td>
            <td style="padding: 10px;">${product.quantity}</td>
            <td style="padding: 10px;">$${product.price}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
    <p>We hope you are satisfied with your purchase! If you have any questions or need further assistance, please do not hesitate to contact us.</p>
    <p>Thank you for shopping with us!</p>
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
     <p>For support, email us at: <a href="mailto: sales@neocellularparts.com">sales@neocellularparts.com</a></p>
      <p>5659 Buford Hwy Ste# 108-111,<br />Doraville, GA 30340, United States</p>
    </footer>
  </div>
`,
};
