import { useEffect, useRef } from "react";
import { useConversation } from "../../../context/conversation-context";
import Message from "../messages-bar/message";

export type MessageType = {
  _id?: string;
  message: string;
  recipient: string;
  sender: string;
  createAt?: string;
};

const Conversation = () => {
  const { currentUser, selectedConversationMessages } = useConversation();
  const scrollToBtm = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBtm.current?.scrollIntoView({ behavior: "smooth" })
  }, [selectedConversationMessages]);

  return (
    <div className="chats border-b flex flex-col justify-start gap-6 pr-2 h-[84%] overflow-x-hidden no-scrollbar pb-6">
      {selectedConversationMessages?.map((message, index) => {
        return (
          <Message
            message={message}
            key={index}
            isCurrentUser={currentUser?._id === message.sender ? true : false}
          />
        );
      })}
      <div ref={scrollToBtm} />
    </div>
  );
};
export default Conversation;
