const nodemailer = require('nodemailer');
const emailTemplates = require('./template'); 

// Mail settings
// const MAIL_SETTINGS = {
//   host: process.env.SMTP_HOST, 
//   port: process.env.SMTP_PORT, 
//   secure: false, // Set to true if using SSL/TLS
//   auth: {
//     user: process.env.SMTP_USER, 
//     pass: process.env.SMTP_PASS, 
//   },
// };


const MAIL_SETTINGS = {
  service: 'gmail',
  auth: {
    user: 'robinncharles1992@gmail.com', 
    pass: 'xijy aspe nicd qmfl', 
  },
  debug: true, 
  logger: true, 
};

// Create the transporter
const transporter = nodemailer.createTransport(MAIL_SETTINGS);

// Helper function to send email
const sendEmail = (email, subject, htmlContent) => {
  const mailOptions = {
    from: '"GMT 🛍️" <no-reply@gmt.com>',
    to: email,
    subject: subject,
    html: htmlContent,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(error);
      } else {
        console.log('Email sent:', info.messageId);
        resolve(info);
      }
    });
  });
};


const emailFunctions = {
  sendVerifyOtp: (email, otp) => {
    const html = emailTemplates.verifyOtp(otp);
    return sendEmail(email, 'Email Verification OTP', html);
  },
  sendRegisterSuccess: (email, name) => {
    const html = emailTemplates.registerSuccess(name);
    return sendEmail(email, 'Registration Successful', html);
  },
  sendResetPassword: (email, link) => {
    const html = emailTemplates.resetPassword(link);
    return sendEmail(email, 'Reset Password Link', html);
  },
  sendForgotPassword: (email, otp) => {
    const html = emailTemplates.forgotPassword(otp);
    return sendEmail(email, 'Forgot Password OTP', html);
  },
  sendResetPasswordSuccess: (email, name) => {
    const html = emailTemplates.resetPasswordSuccess(name);
    return sendEmail(email, 'Password Reset Successful', html);
  },
  sendCreateOrder: (email, orderId, orderDetails) => {
    const html = emailTemplates.createOrder(orderId, orderDetails);
    return sendEmail(email, 'Order Confirmation', html);
  },
  sendPaymentSuccess: (email, orderId, paymentDetails) => {
    const html = emailTemplates.paymentSuccess(orderId, paymentDetails);
    return sendEmail(email, 'Payment Successful', html);
  },
  sendPaymentFailed: (email, orderId, reason) => {
    const html = emailTemplates.paymentFailed(orderId, reason);
    return sendEmail(email, 'Payment Failed', html);
  },
  sendDeliveredOrder: (email, orderId, deliveryDate) => {
    const html = emailTemplates.deliveredOrder(orderId, deliveryDate);
    return sendEmail(email, 'Order Delivered', html);
  },
};




module.exports = emailFunctions;
