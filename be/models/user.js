import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    uniquue: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpriesAr: Date,
  verificationToken: String,
  verificationTokenExpiresAt: Date,
});

export const User = mongoose.model("User", userSchema);
