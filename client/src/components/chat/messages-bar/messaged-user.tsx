import { useConversation } from "../../../context/conversation-context";
import { cn } from "../../../utils/cn";
import ProfileIcon from "../reusable/profile-icon";


type MessageUserProps = {
  username: string;
  _id: string;
  avatar: string
};

const MessagedUser = ({ username, _id, avatar }: MessageUserProps) => {

  const { setSelectedConversation, selectedConversation, onlineUsersList } = useConversation();

  const isOnline = onlineUsersList.some(userId => userId === _id);
  console.log(isOnline)

  return (
    <div
      onClick={() => setSelectedConversation({ username, _id, avatar })}
      className={cn("user cursor-pointer flex gap-2 items-center w-full p-1 rounded-md sm:p-2 border-2 border-transparent",
        _id === selectedConversation?._id && "border-primaryMessage/50"
      )}
    >
      <div className="relative">
        <ProfileIcon variant="standard" src={avatar} username={username} />
        <span className={`w-5 h-5 bottom-0 right-0 absolute border-4 border-secondaryBackground rounded-full ${onlineUsersList.some(userId => userId === _id) ? " bg-online" : "bg-offline"}`}></span>
      </div>

      <div className="flex flex-col w-full h-full justify-between py-2">
        <div className="flex gap-4 items-center">
          <p className="username text-primaryText text-lg capitalize">{username}</p>
        </div>
        <div className="flex justify-between w-full text-secondaryText text-sm md:text-xs">
          <p className="message">Hey Wat's app buddy</p>
          <p className="last-online">20m</p>
        </div>
      </div>
    </div >
  );
};
export default MessagedUser;
