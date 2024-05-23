import { useState } from "react";
import Button from "../../ui/button";
import { useConversation } from "../../../context/conversation-context";
import socket from "../../../services/socket";
import { useAuth } from "../../../context/auth-context";
import { MessageType } from "./conversation";
import Input from "../../ui/input";

const SendingInputBar = () => {
  const [messageText, setMessageText] = useState("");
  const { selectedConversation, setSelectedConversationMessages, selectedConversationMessages } = useConversation();
  const { currentUser } = useAuth();


  const btnHandler = async () => {
    if (messageText.trim() === '') return;

    // now sending message to socket connection
    const newMessage: MessageType = {
      message: messageText,
      recipient: selectedConversation?._id,
      sender: currentUser?._id
    }

    socket.emit("message", newMessage);

    setSelectedConversationMessages([...selectedConversationMessages, newMessage]);
    setMessageText("");
  };


  return (
    <div className="h-[10%] sending-panel">
      <div className="px-4 md:px-2 flex gap-4 md:gap-2 justify-center items-center h-full w-full">
        <div className="user-text-input w-[60%] md:w-[70%]">
          <Input
            variant="standard"
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Type something here..."
            className="w-full"
          />
        </div>
        <div className="emoji-input grid">
          <p className="h-10 w-10 border rounded-full"></p>
        </div>
        <div className="send-message">
          <Button
            variant="primary"
            onClick={btnHandler}
            className={!messageText.trim() ? "opacity-40" : ""}
          >Send</Button>
        </div>
      </div>
    </div>
  );
};
export default SendingInputBar;
