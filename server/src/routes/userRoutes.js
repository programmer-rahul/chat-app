import { Router } from "express";
import {
  getUser,
  loginController,
  logout,
  refreshAccessToken,
  getAllUserController,
  registerController,
  updateProfileImage,
} from "../controllers/user.controller.js";
import multerUpload from "../middlewares/multerUpload.js";
import verifyJWT from "../middlewares/verifyJWT.js";

const userRoutes = Router();

userRoutes.route("/register").post(registerController);

userRoutes.route("/login").post(loginController);
userRoutes.route("/refresh-access-token").get(refreshAccessToken);

// protected routes
userRoutes.route("/get-user").get(verifyJWT, getUser);
userRoutes.route("/all-users").get(verifyJWT, getAllUserController);
userRoutes.route("/logout").get(verifyJWT, logout);
userRoutes
  .route("/update-profile")
  .put(multerUpload.single("profile"), verifyJWT, updateProfileImage);

export default userRoutes;
