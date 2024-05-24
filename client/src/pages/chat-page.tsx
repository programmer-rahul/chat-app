import { useEffect } from "react";
import ChatsBar from "../components/chat/chats-bar/chats-bar";
import MessagesBar from "../components/chat/messages-bar/messages-bar";
import Header from "../components/chat/top-bar/header";
import socket from "../services/socket";
import { useAuth } from "../context/auth-context";
import { useConversation } from "../context/conversation-context";

const ChatPage = () => {

  const { currentUser } = useAuth();
  const { setOnlineUsersList } = useConversation();

  // socket functions 
  const onConnect = () => {
    console.log("Connected To Server :)");
    socket.emit("login", currentUser?._id);
  };
  const onUpdatedOnlineUsersList = (data: string[]) => {
    if (!data.length) return;
    setOnlineUsersList(data);
  }

  useEffect(() => {
    socket.on("connect", onConnect);
    socket.on('updated-online-users-list', onUpdatedOnlineUsersList)

    return () => {
      socket.off('connect', onConnect);
      socket.off('updated-online-users-list', onUpdatedOnlineUsersList)
    }
  }, []);

  return (
    <main className="w-screen h-screen">
      <div className="chat-main w-full p-2 h-full bg-background">
        {/* header  */}
        <div className="header h-[6%] sm:h-[8%]">
          <Header />
        </div>

        {/* main  */}
        <div className="h-[94%] w-full py-4 flex sm:h-[92%]">
          {/* message-bar  */}
          <div className="messages-bar w-full md:w-[50%] lg:w-[40%] bg-secondaryBackground rounded-md">
            <MessagesBar />
          </div>
          {/* chats-bar  */}
          <div className="chats-bar w-full hidden md:block">
            <ChatsBar />
          </div>
          {/* current-user-details  */}
          <div className="current-user-bar bg-secondaryBackground rounded-md w-[35%] hidden 2xl:block"></div>
        </div>
      </div>
    </main>
  );
};
export default ChatPage;
