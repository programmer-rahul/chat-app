import Message from "../models/message.model.js";

const storeMessageInDB = async ({ messageText, recipient, sender }) => {
  console.log("recipient", recipient);
  console.log("sender", sender);

  try {
    const NewMessage = await Message.create({
      message: messageText,
      recipient,
      sender,
    });
  } catch (err) {
    console.log("ERROR IN STORING MESSAGE IN DB");
  }
};

export default storeMessageInDB;
