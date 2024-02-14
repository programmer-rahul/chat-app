import { Router } from "express";
import { addMessageController } from "../controllers/message.controller.js";

const messageRoutes = Router();

// protected
messageRoutes.route("/add-message").post(addMessageController);
messageRoutes.route("/get-conversation");

export default messageRoutes;
