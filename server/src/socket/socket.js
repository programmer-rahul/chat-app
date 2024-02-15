import { Server } from "socket.io";
import server from "../app.js";

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

export default io;
