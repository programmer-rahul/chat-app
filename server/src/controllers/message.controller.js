import asyncHandler from "../utils/asyncHandler.js";
import Message from "../models/message.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export const addMessageController = asyncHandler(async (req, res, next) => {
  const { sender, recipient, messageText } = req.body;

  console.log(sender);
  const message = await Message.create({
    sender,
    recipient,
    message: messageText,
  });

  if (!message)
    return next(new ApiError(400, "Error in storing message in db"));

  return res
    .status(201)
    .json(new ApiResponse(201, {}, "Message added successfully"));
});
