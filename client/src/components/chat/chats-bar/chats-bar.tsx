import { useEffect, useState } from "react";
import { useMessage } from "../../../context/message-context";
import ChatTopBar from "./chat-top-bar";
import FullChats from "./full-chats";
import SendingInputBar from "./sending-input-bar";
import { getCurrentConversation } from "../../../services/api";

const ChatsBar = () => {
  const { selectedConversation } = useMessage();
  const { currentUser } = useMessage();

  const [currentChatMessages, setCurrentChatMessages] = useState([]);

  useEffect(() => {
    if (selectedConversation) {
      getCurrentConversation(currentUser?._id).then((data) => {
        console.log(data);
        if (!data?.status) return console.log("Something wrong");
        setCurrentChatMessages(data.data);
      });
    }
  }, [selectedConversation]);

  return (
    <div className="h-full">
      {selectedConversation ? (
        <div className="main h-full px-4">
          <ChatTopBar />
          <FullChats chatMessages={currentChatMessages} />
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
