const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
  userDetails,
  forgotPassword,
  resetPassword,
  verifyOtp,
  updateUserDetails,
  resendVerifyEmailOtp,
  verifyUserEmail
} = require("../../controllers/auth/auth-controller");

const router = express.Router();

router.get("/user-details/:id", userDetails);
router.put("/update-user/:id", updateUserDetails);

router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.post("/verify-email", verifyUserEmail);
router.post("/resend-otp", resendVerifyEmailOtp);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

module.exports = router;
