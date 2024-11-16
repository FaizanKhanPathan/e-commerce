const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  passwordResetOtp: { type: String },
  passwordResetOtpExpiry: { type: Date,
    default: () => Date.now() + 10 * 60 * 1000,
   },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
