import { useEffect } from "react";
import ChatsBar from "../components/chat/chats-bar/chats-bar";
import MessagesBar from "../components/chat/messages-bar/messages-bar";
import Header from "../components/chat/top-bar/header";
import socket from "../services/socket";
import { useAuth } from "../context/auth-context";

const ChatPage = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected To Server :)");
      socket.emit('login', currentUser?._id);
    });
  }, []);

  return (
    <main className="w-screen h-screen ">
      <div className="chat-main w-full p-2 h-full bg-background">
        {/* header  */}
        <div className="header h-[6%] sm:h-[8%]">
          <Header />
        </div>

        {/* main  */}
        <div className="h-[94%] w-full py-2 flex sm:h-[92%]">
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
