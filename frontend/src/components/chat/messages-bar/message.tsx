import ProfileIcon from "../reusable/profile-icon";

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
  <div className="left flex flex-col gap-2 md:gap-1">
    <div
      className={`p-4 md:p-2 xl:p-4 text-base rounded-xl ${
        isCurrentUser
          ? "rounded-br-none bg-primaryMessage text-primaryText"
          : "rounded-bl-none bg-secondaryMessage text-secondaryText"
      }`}
    >
      <p className="message-text text-primaryText">
        This is a text message for you
      </p>
    </div>
    <div
      className={`message-details text-xs text-secondaryText md:text-[10px] ${
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
