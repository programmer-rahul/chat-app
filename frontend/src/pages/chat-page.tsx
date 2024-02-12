import ChatsBar from "../components/chat/chats-bar";
import MessagesBar from "../components/chat/messages-bar";
import TopBar from "../components/chat/top-bar";

const ChatPage = () => {
  return (
    <main className="w-screen h-screen">
      <div className="chat-main w-full h-full px-4 py-3 bg-background">
        <div className="topbar h-[10%]  ">
          <TopBar />
        </div>
        <div className="h-[90%] w-full flex pt-4 pb-2">
          <div className="messages-bar w-[35%]">
            <MessagesBar />
          </div>
          <div className="chats-bar w-full">
            <ChatsBar />
          </div>
          <div className="current-user-bar border w-[35%]"></div>
        </div>
      </div>
    </main>
  );
};
export default ChatPage;
