import { useEffect, useMemo } from "react";
import ChatsBar from "../components/chat/chats-bar/chats-bar";
import MessagesBar from "../components/chat/messages-bar/messages-bar";
import TopBar from "../components/chat/top-bar/top-bar";
import { io } from 'socket.io-client'
import { useMessage } from "../context/message-context";
export let socket;
const ChatPage = () => {
  socket = useMemo(() => io('http://localhost:5000'), []);
  const { currentUser } = useMessage();


  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
      socket.emit('login', currentUser?._id);
    });
  }, []);


  return (
    <main className="w-screen h-screen">
      <div className="chat-main w-full h-full p-2 bg-background">
        {/* top-bar  */}
        <div className="topbar h-[6%] sm:h-[8%]">
          <TopBar />
        </div>

        {/* main  */}
        <div className="h-[94%] w-full flex py-2 sm-h[92%]">
          {/* message-bar  */}
          <div className="messages-bar w-full md:w-[50%] lg:w-[40%]">
            <MessagesBar />
          </div>
          {/* chats-bar  */}
          <div className="chats-bar w-full hidden md:block">
            <ChatsBar />
          </div>
          {/* current-user-details  */}
          <div className="current-user-bar border w-[35%] hidden 2xl:block"></div>
        </div>
      </div>
    </main>
  );
};
export default ChatPage;
