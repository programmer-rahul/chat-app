import { useEffect } from "react";
import { useMessage } from "../../../context/message-context";
import ChatTopBar from "./chat-top-bar";
import FullChats from "./full-chats";
import SendingInputBar from "./sending-input-bar";

const ChatsBar = () => {
  const { selectedConversation } = useMessage();

  useEffect(() => {}, []);
  return (
    <div className="h-full">
      {selectedConversation ? (
        <div className="main h-full px-4">
          <ChatTopBar />
          <FullChats />
          <SendingInputBar />
        </div>
      ) : (
        <WelcomeMessage />
      )}
    </div>
  );
};

const WelcomeMessage = () => {
  return (
    <div className="text-center mt-40">
      <p className="text-3xl text-primaryText">Select chat to get started</p>
    </div>
  );
};

export default ChatsBar;
