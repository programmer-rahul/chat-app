import { useEffect, useRef } from "react";
import { useConversation } from "../../../context/conversation-context";
import Message from "../messages-bar/message";
import { useAuth } from "../../../context/auth-context";
import { formatMessageDate } from "../../../utils/helper";

export type MessageType = {
  _id?: string;
  message: string;
  recipient: string | undefined;
  sender: string | undefined;
  createdAt?: string;
};

const Conversation = () => {
  const { selectedConversationMessages } = useConversation();
  const { currentUser } = useAuth();
  const scrollToBtm = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBtm.current?.scrollIntoView({ behavior: "smooth" })
  }, [selectedConversationMessages]);

  return (
    <div className="chats border-b border-border flex flex-col justify-start gap-6 pr-2 pb-9 h-[84%] overflow-x-hidden no-scrollbar">
      {selectedConversationMessages?.map((message, index) => {
        let formattedDate = message.createdAt ? formatMessageDate(message.createdAt) : "";

        return (
          <Message
            key={index}
            message={message}
            isCurrentUser={currentUser?._id === message.sender ? true : false}
            createdAt={formattedDate}
          />
        );
      })}
      <div ref={scrollToBtm} />
    </div>
  );
};
export default Conversation;
