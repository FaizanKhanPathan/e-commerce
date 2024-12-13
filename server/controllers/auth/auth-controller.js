const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const emailFunctions = require('../../helpers/email');
const crypto = require("crypto");



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

    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpiry = Date.now() + 2 * 60 * 1000;

    user.passwordResetOtp = otp;
    user.passwordResetOtpExpiry = otpExpiry;
    await user.save();

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

    user.password = hashPassword;
    user.verified = false;
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
    const userDetails = await User.findOne({ _id }).select("-password");

    return res.json({
      success: true,
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

const updateUserDetails = async (req, res) => {
  const { id: _id } = req.params; // Extract user ID from route parameters
  const { userName, taxId, phone, companyName } = req.body; // Destructure specific fields from the request body
  // Extract the updated data from the request body

  try {
    // Create an object with only the allowed fields
    const updateData = { userName, taxId, phone, companyName };

    // Find the user by ID and update with the new data
    const updatedUser = await User.findByIdAndUpdate(
      _id, // The user ID
      updateData, // The updated data
      { new: true, runValidators: true } // Return the updated document and run validation
    );

    // If user not found
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with the updated user data
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

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

    const passwordResetOtp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

    const passwordResetOtpExpiry = Date.now() + 2 * 60 * 1000;

    const newUser = new User({
      userName,
      phone,
      taxId,
      companyName,
      email,
      passwordResetOtp,
      passwordResetOtpExpiry,
      isEmailVerified: false,
      password: hashPassword,
    });

    await newUser.save();

    await emailFunctions.sendVerifyOtp(email, userName, passwordResetOtp);

    res.status(200).json({
      success: true,
      message: "Registration successful",
      email: newUser.email
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

// Verify User Email Function
const verifyUserEmail = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.passwordResetOtp !== otp || Date.now() > user.passwordResetOtpExpiry) {
      return res.json({
        success: false,
        message: "Invalid or expired OTP",
      });
    }

    user.isEmailVerified = true;
    user.passwordResetOtp = null;
    user.passwordResetOtpExpiry = null;
    await user.save();

    await emailFunctions.sendRegisterSuccess(email, user.userName);


    res.status(200).json({
      success: true,
      message: "Email verification successful",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

// Resend OTP Function
const resendVerifyEmailOtp = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.isEmailVerified) {
      return res.json({
        success: false,
        message: "Email is already verified",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP;
    const otpExpiry = Date.now() + 2 * 60 * 1000;;
    user.passwordResetOtp = otp;
    user.passwordResetOtpExpiry = otpExpiry;
    await user.save();

    await emailFunctions.sendVerifyOtp(email, user.userName, otp);

    res.status(200).json({
      success: true,
      message: "OTP resent successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
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
        isEmailVerified: checkUser.isEmailVerified
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

module.exports = { resendVerifyEmailOtp, verifyUserEmail, updateUserDetails, userDetails, registerUser, loginUser, logoutUser, authMiddleware, forgotPassword, verifyOtp, resetPassword };
