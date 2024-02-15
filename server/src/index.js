import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import app from "./app.js";

dotenv.config({
  path: ".env",
});

import { createServer } from "http";
import { Server } from "socket.io";
import asyncHandler from "./utils/asyncHandler.js";
import Message from "./models/message.model.js";
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let connectedUsers = [];
const storeMessageInDB = async ({ messageText, recipient, sender }) => {
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

io.on("connection", (socket) => {
  socket.on("login", (userId) => {
    const isUserExists = connectedUsers.some((user) => user.userId === userId);
    if (!isUserExists) {
      const user = { userId, socketId: socket.id };
      connectedUsers.push(user);
    }
    console.log("Total Connection Count :- ", connectedUsers.length);
  });

  socket.on("disconnect", () => {
    connectedUsers = connectedUsers.filter(
      (user) => user.socketId !== socket.id
    );
    console.log("A user disconnected ");
    console.log("Total Connection Count :- ", connectedUsers.length);
  });

  // messages logic
  socket.on("message", ({ messageText, recipient, sender }) => {
    console.log("New Message Recieved in server");
    const isRecipientOnline = connectedUsers.find(
      (user) => user.userId === recipient
    );

    if (isRecipientOnline) {
      let recipientSocketId = isRecipientOnline.socketId;
      socket
        .to(recipientSocketId)
        .emit("recieve-message", { message: messageText, sender, recipient });

      storeMessageInDB({ messageText, recipient, sender });
    } else {
      console.log("Recipient is not online");
      storeMessageInDB({ messageText, recipient, sender });
    }
  });
});

connectDB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log("Server Connected Successfully on Port :-", process.env.PORT);
    });
  })
  .catch(() => {
    console.log("Server Connection Error");
  });
