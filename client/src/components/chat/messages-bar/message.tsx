import { useAuth } from "../../../context/auth-context";
import { useConversation } from "../../../context/conversation-context";
import { MessageType } from "../chats-bar/conversation";
import ProfileIcon from "../reusable/profile-icon";

type MessageProps = {
  isCurrentUser: boolean;
  message: MessageType;
  createdAt: string;
};

const Message = ({ isCurrentUser, message, createdAt }: MessageProps) => {

  return (
    <div
      className={`message flex gap-4 items-center font-poppins ${isCurrentUser ? "justify-end" : "justify-start"
        }`}
    >
      {isCurrentUser ? (
        <>
          <MessageSide isCurrentUser={isCurrentUser} message={message} createdAt={createdAt} />
          <ProfileSide isCurrentUser={isCurrentUser} />
        </>
      ) : (
        <>
          <ProfileSide isCurrentUser={isCurrentUser} />
          <MessageSide isCurrentUser={isCurrentUser} message={message} createdAt={createdAt} />
        </>
      )}
    </div>
  );
};

const MessageSide = ({ isCurrentUser, message, createdAt }: Partial<MessageProps>) => {
  return (
    <div className="left flex flex-col gap-2 md:gap-1">
      <div
        className={`p-4 md:p-2 xl:p-4 text-base rounded-xl ${isCurrentUser
          ? "rounded-br-none bg-primaryMessage text-primaryText"
          : "rounded-bl-none bg-secondaryMessage text-secondaryText"
          }`}
      >
        <p className="message-text text-primaryText font-semibold">{message?.message}</p>
      </div>
      
      <div
        className={`message-details text-xs space-x-1 text-secondaryText md:text-[10px] ${isCurrentUser ? "self-end" : "self-start "
          }`}
      >
        <span>Message Sent</span>
        <span className="font-semibold text-primaryText/80">{createdAt}</span>
      </div>
    </div>
  );
};

const ProfileSide = ({ isCurrentUser }: Partial<MessageProps>) => {
  const { currentUser } = useAuth();
  const { selectedConversation } = useConversation();
  return <div className="right">
    <ProfileIcon variant="small" src={isCurrentUser ? currentUser?.avatar : selectedConversation?.avatar} username={selectedConversation?.username} />
  </div>
}

export default Message;
