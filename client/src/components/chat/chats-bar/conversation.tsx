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
  // console.log(selectedConversationMessages);
  console.log(selectedConversationMessages);

  return (
    <div className="chats border-b flex flex-col justify-start gap-6 pr-2 h-[84%] overflow-y-scroll overflow-x-hidden no-scrollbar pb-6">
      {selectedConversationMessages.map((message, index) => {
        // console.log(message);

        return (
          <Message
            message={message}
            key={index}
            isCurrentUser={currentUser?._id === message.sender ? true : false}
          />
        );
      })}
    </div>
  );
};
export default Conversation;
