import Message from "../models/message.model.js";

const storeMessageInDB = async ({ message, recipient, sender }) => {
  // console.log("recipient", recipient);
  // console.log("sender", sender);
  // console.log("message", message);

  try {
    const NewMessage = await Message.create({
      message: message,
      recipient,
      sender,
    });
  } catch (err) {
    console.log("ERROR IN STORING MESSAGE IN DB", err);
  }
};

export default storeMessageInDB;
