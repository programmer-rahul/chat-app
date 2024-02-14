import { useMessage } from "../../../context/message-context";
import Message from "../messages-bar/message";

export type MessageType = {
  _id: string;
  message: string;
  recipient: string;
  sender: string;
  createAt: string;
};

type FullChatProps = {
  chatMessages: [MessageType];
};

const FullChats = ({ chatMessages }: FullChatProps) => {
  const { currentUser } = useMessage();
  // console.log(chatMessages);
  return (
    <div className="chats border-b flex flex-col justify-start gap-6 pr-2 h-[84%] overflow-y-scroll overflow-x-hidden no-scrollbar pb-6">
      {chatMessages.map((message, index) => {
        console.log(currentUser?._id);

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
export default FullChats;
