import storeMessageInDB from "../db/storeMessageInDB.js";

// total users connected to server
let connectedUsers = [];

const socketConnectionHandler = (socket) => {
  // when user connected to server
  socket.on("login", (userId) => loginSocket(socket, userId));

  // when user disconnected to server
  socket.on("disconnect", () => disconnectSocket(socket));

  // messages logic
  socket.on("message", (data) => {
    messageSocket(socket, data);
  });
};

export default socketConnectionHandler;

const loginSocket = (socket, userId) => {
  // Modify loginSocket to accept socket as a parameter
  const isUserExists = connectedUsers.some((user) => user.userId === userId);
  if (!isUserExists) {
    const user = { userId, socketId: socket.id };
    connectedUsers.push(user);
  }
  console.log("Total Connection Count :- ", connectedUsers.length);
};

const disconnectSocket = (socket) => {
  connectedUsers = connectedUsers.filter((user) => user.socketId !== socket.id);
  console.log("A user disconnected ");
  console.log("Total Connection Count :- ", connectedUsers.length);
};

const messageSocket = (socket, { messageText, recipient, sender }) => {
  // console.log("New Message Recieved in server");
  const isRecipientOnline = connectedUsers.find(
    (user) => user.userId === recipient
  );

  if (isRecipientOnline) {
    let recipientSocketId = isRecipientOnline.socketId;
    socket
      .to(recipientSocketId)
      .emit("recieve-message", { message: messageText, sender, recipient });

    storeMessageInDB({ messageText, recipient, sender });
    console.log("Message sent to user in realtime");
  } else {
    console.log("Recipient is not online");
    storeMessageInDB({ messageText, recipient, sender });
    console.log("Message stored to DB");
  }
};
