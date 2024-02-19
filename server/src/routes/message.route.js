import { Router } from "express";
import verifyJWT from "../middlewares/verifyJWT.js";
import {
  addMessageController,
  getConversationController,
} from "../controllers/message.controller.js";

const messageRoutes = Router();

// protected
messageRoutes.route("/add-message").post(addMessageController);
messageRoutes
  .route("/get-conversation/:userid")
  .get(verifyJWT, getConversationController);

export default messageRoutes;
