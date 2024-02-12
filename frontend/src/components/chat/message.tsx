import ProfileIcon from "./profile-icon";

type MessageProps = {
  isCurrentUser: boolean;
};

const Message = ({ isCurrentUser }: MessageProps) => {
  return (
    <div
      className={`message flex gap-2 items-end ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {isCurrentUser ? (
        <>
          <MessageSide isCurrentUser={isCurrentUser} />
          <ProfileSide />
        </>
      ) : (
        <>
          <ProfileSide />
          <MessageSide isCurrentUser={isCurrentUser} />
        </>
      )}
    </div>
  );
};

const MessageSide = ({ isCurrentUser }: Partial<MessageProps>) => (
  <div className="left flex flex-col gap-2">
    <div
      className={`p-4 text-base ${
        isCurrentUser
          ? "rounded-xl rounded-br-none bg-primaryMessage text-primaryText"
          : "rounded-xl rounded-bl-none bg-secondaryMessage text-secondaryText"
      }`}
    >
      <p className="message-text text-primaryText">
        This is a text message for you
      </p>
    </div>
    <div
      className={`message-details text-xs text-secondaryText ${
        isCurrentUser ? "self-end" : "self-start"
      }`}
    >
      <span>Message Sent </span>
      <span>1:40pm</span>
    </div>
  </div>
);
const ProfileSide = () => (
  <div className="right">
    <ProfileIcon />
  </div>
);

export default Message;
