import { useConversation } from "../../../context/conversation-context";
import ProfileIcon from "../reusable/profile-icon";

type MessageUserProps = {
  username: string;
  _id: string;
  avatar: string
};

const MessagedUser = ({ username, _id, avatar }: MessageUserProps) => {
  const { setSelectedConversation } = useConversation();

  return (
    <div
      onClick={() => setSelectedConversation({ username, _id, avatar })}
      className="user cursor-pointer flex gap-2 items-center w-full"
    >
      <div>
        <ProfileIcon isPrimary={true} src={avatar} username={username} />
      </div>
      <div className="flex flex-col w-full h-full justify-between py-2">
        <p className="username text-primaryText text-lg capitalize">{username}</p>
        <div className="flex justify-between w-full text-secondaryText text-sm md:text-xs">
          <p className="message">Hey Wat's app buddy</p>
          <p className="last-online">20m</p>
        </div>
      </div>
    </div>
  );
};
export default MessagedUser;
