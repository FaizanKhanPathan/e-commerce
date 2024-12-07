const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const  emailFunctions  = require('../../helpers/email');
const crypto = require("crypto");




// Forgot Password - Generate OTP and send to the email
// const forgotPassword = async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found with this email address",
//       });
//     }

//     const otp = crypto.randomInt(100000, 999999).toString(); 
//     const otpExpiry = Date.now() + 2 * 60 * 1000; 

//     user.passwordResetOtp = otp;
//     user.passwordResetOtpExpiry = otpExpiry;
//     await user.save();
//     const mailOptions = {
//       // from: process.env.SMTP_SENDER,
//       from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//       to: email,
//       subject: "Password Reset OTP",
//       text: `Your OTP for password reset is: ${otp}. It will expire in 10 minutes.`,
//     };

//      transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return res.status(500).json({
//           success: false,
//           message: "Error sending OTP email",
//         });
//       }
//       return res.status(200).json({
//         success: true,
//         message: "OTP sent to your email address",
//       });
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred",
//     });
//   }
// };


const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found with this email address',
      });
    }

    const otp = crypto.randomInt(100000, 999999).toString(); // Generate OTP
    const otpExpiry = Date.now() + 2 * 60 * 1000; // Set expiry (2 minutes)

    // Save OTP and expiry in the database
    user.passwordResetOtp = otp;
    user.passwordResetOtpExpiry = otpExpiry;
    await user.save();

    // Send OTP email
    await emailFunctions.sendForgotPassword(email, otp);

    res.status(200).json({
      success: true,
      message: 'OTP sent to your email address',
    });
  } catch (e) {
    console.error('Error during password reset:', e);
    res.status(500).json({
      success: false,
      message: 'Some error occurred. Please try again.',
    });
  }
};


// Verify OTP and update user's verified status
const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with this email address",
      });
    }

    if (user.passwordResetOtp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (Date.now() > user.passwordResetOtpExpiry) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired",
      });
    }
    user.verified = true;
    user.passwordResetOtp = undefined;
    user.passwordResetOtpExpiry = undefined;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully. You can now reset your password.",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};


// Reset Password - Verify OTP and change password
// const resetPassword = async (req, res) => {
//   const { email, otp, newPassword } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found with this email address",
//       });
//     }
//     if (user.passwordResetOtp !== otp) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid OTP",
//       });
//     }

//     if (Date.now() > user.passwordResetOtpExpiry) {
//       return res.status(400).json({
//         success: false,
//         message: "OTP has expired",
//       });
//     }

//     const hashPassword = await bcrypt.hash(newPassword, 12);

//     user.password = hashPassword;
//     user.passwordResetOtp = undefined; 
//     user.passwordResetOtpExpiry = undefined;
//     await user.save();

//     return res.status(200).json({
//       success: true,
//       message: "Password has been reset successfully",
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred",
//     });
//   }
// };


const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with this email address",
      });
    }

    if (!user.verified) {
      return res.status(400).json({
        success: false,
        message: "OTP verification required before resetting the password",
      });
    }

    const hashPassword = await bcrypt.hash(newPassword, 12);

    // Update password and reset verified status
    user.password = hashPassword;
    user.verified = false; // Reset verification status after password reset
    await user.save();

    await emailFunctions.sendResetPasswordSuccess(email, user.userName);

    return res.status(200).json({
      success: true,
      message: "Password has been reset successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};



// user details
const userDetails = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const userDetails = await User.findOne({ _id });

    return res.json({
      success: false,
      message: "User Details Fetch Successful!",
      data: userDetails
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }

}

//register
const registerUser = async (req, res) => {
  const { userName, phone, taxId, email, companyName, password, confirmPassword } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });

    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "Password and Confirm password not match",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      phone,
      taxId,
      companyName,
      email,
      password: hashPassword,
    });

    await newUser.save();


    await emailFunctions.sendRegisterSuccess(email, userName);


    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exists! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      process.env.JWT_CLIENT_SECRET_KEY,
      { expiresIn: "1200m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: true }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        userName: checkUser.userName,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//logout
const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!",
  });
};

//auth middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });

  try {
    const decoded = jwt.verify(token, process.env.JWT_CLIENT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });
  }
};

module.exports = { userDetails, registerUser, loginUser, logoutUser, authMiddleware,forgotPassword, verifyOtp,resetPassword };
