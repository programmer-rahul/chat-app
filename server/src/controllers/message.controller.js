import asyncHandler from "../utils/asyncHandler.js";
import Message from "../models/message.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import mongoose from "mongoose";

export const addMessageController = asyncHandler(async (req, res, next) => {
  const { sender, recipient, messageText } = req.body;

  // console.log(sender);
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

export const getConversationController = asyncHandler(
  async (req, res, next) => {
    if (!req?.user) next(new ApiError(400, "Unauthorized request"));

    const { userid } = req.params;
    const _id = req.user._id;

    console.log(typeof userid);
    console.log(typeof _id);

    // check that id's are valid or not
    if (
      !mongoose.Types.ObjectId.isValid(userid) ||
      !mongoose.Types.ObjectId.isValid(_id)
    ) {
      return next(new ApiError(400, "Wrong userid's"));
    }

    const conversation = await Message.find({
      $or: [
        { sender: _id, recipient: userid },
        { sender: userid, recipient: _id },
      ],
    });
    console.log(conversation);

    if (!conversation)
      return next(new ApiError(400, "Error in getting conversation from db"));

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          { conversation },
          "Conversation fetched successfully"
        )
      );
  }
);
