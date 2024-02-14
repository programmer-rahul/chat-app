import { Router } from "express";
import {
  addMessageController,
  getConversationController,
} from "../controllers/message.controller.js";

const messageRoutes = Router();

// protected
messageRoutes.route("/add-message").post(addMessageController);
messageRoutes.route("/get-conversation/:userid").get(getConversationController);

export default messageRoutes;
