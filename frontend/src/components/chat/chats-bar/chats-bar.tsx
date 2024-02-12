import ChatTopBar from "./chat-top-bar";
import FullChats from "./full-chats";
import SendingInputBar from "./sending-input-bar";

const ChatsBar = () => {
  return (
    <div className="h-full">
      <div className="main h-full px-4">
        <ChatTopBar />
        <FullChats />
        <SendingInputBar />
      </div>
    </div>
  );
};

export default ChatsBar;
