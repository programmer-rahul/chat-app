import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import server from "./app.js";
import io from "./socket/socket.js";
import socketConnectionHandler from "./socket/socketConnectionHandler.js";

dotenv.config({
  path: ".env",
});

// socket connection
io.on("connection", socketConnectionHandler);

connectDB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log("Server Connected Successfully on Port :-", process.env.PORT);
    });
  })
  .catch(() => {
    console.log("Server Connection Error");
  });
