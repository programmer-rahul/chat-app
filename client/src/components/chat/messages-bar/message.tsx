import { useAuth } from "../../../context/auth-context";
import { useConversation } from "../../../context/conversation-context";
import { MessageType } from "../chats-bar/conversation";
import ProfileIcon from "../reusable/profile-icon";

type MessageProps = {
  isCurrentUser: boolean;
  message: MessageType;
};

const Message = ({ isCurrentUser, message }: MessageProps) => {

  return (
    <div
      className={`message flex gap-2 items-end ${isCurrentUser ? "justify-end" : "justify-start"
        }`}
    >
      {isCurrentUser ? (
        <>
          <MessageSide isCurrentUser={isCurrentUser} message={message} />
          <ProfileSide isCurrentUser={isCurrentUser} />
        </>
      ) : (
        <>
          <ProfileSide isCurrentUser={isCurrentUser} />
          <MessageSide isCurrentUser={isCurrentUser} message={message} />
        </>
      )}
    </div>
  );
};

const MessageSide = ({ isCurrentUser, message }: Partial<MessageProps>) => {
  return (
    <div className="left flex flex-col gap-2 md:gap-1">
      <div
        className={`p-4 md:p-2 xl:p-4 text-base rounded-xl ${isCurrentUser
          ? "rounded-br-none bg-primaryMessage text-primaryText"
          : "rounded-bl-none bg-secondaryMessage text-secondaryText"
          }`}
      >
        <p className="message-text text-primaryText">{message?.message}</p>
      </div>
      <div
        className={`message-details text-xs text-secondaryText md:text-[10px] ${isCurrentUser ? "self-end" : "self-start"
          }`}
      >
        <span>Message Sent</span>
        <span>1:40pm</span>
      </div>
    </div>
  );
};
const ProfileSide = ({ isCurrentUser }: Partial<MessageProps>) => {
  const { currentUser } = useAuth();
  const { selectedConversation } = useConversation();
  return <div className="right">
    <ProfileIcon isPrimary={false} src={isCurrentUser ? currentUser?.avatar : selectedConversation?.avatar} username={selectedConversation?.username} />
  </div>
}

export default Message;
