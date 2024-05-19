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

  // getOnlineStatus

  socket.on("check-status", (data) => {
    console.log("data:", data);
    socket.emit("online-users", connectedUsers);
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

const messageSocket = (socket, { message, recipient, sender }) => {
  // console.log("New Message Recieved in server");
  const isRecipientOnline = connectedUsers.find(
    (user) => user.userId === recipient
  );

  if (isRecipientOnline) {
    let recipientSocketId = isRecipientOnline.socketId;
    socket
      .to(recipientSocketId)
      .emit("recieve-message", { message, sender, recipient });

    storeMessageInDB({ message, recipient, sender });
    console.log("Message sent to user in realtime and stored in DB");
  } else {
    console.log("Recipient is not online", recipient);
    storeMessageInDB({ message, recipient, sender });
    console.log("Message stored to DB");
  }
};
