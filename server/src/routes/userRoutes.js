import { Router } from "express";
import {
  getUser,
  loginController,
  logout,
  refreshAccessToken,
  registerController,
} from "../controllers/user.controller.js";
import multerUpload from "../middlewares/multerUpload.js";
import verifyJWT from "../middlewares/verifyJWT.js";

const userRoutes = Router();

userRoutes.route("/register").post(registerController);

userRoutes.route("/login").post(loginController);
userRoutes.route("/refresh-access-token").get(refreshAccessToken);

// protected routes
userRoutes.route("/get-user").get(verifyJWT, getUser);
userRoutes.route("/logout").get(verifyJWT, logout);

export default userRoutes;
