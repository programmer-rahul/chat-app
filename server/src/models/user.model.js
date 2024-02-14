import mongoose from "mongoose";
import * as bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      required: true,
      type: String,
    },
    avatar: {
      type: String,
      default: "",
    },

    refreshToken: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password.trim(), this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
