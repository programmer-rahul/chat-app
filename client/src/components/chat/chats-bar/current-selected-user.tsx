import { useConversation } from "../../../context/conversation-context";
import ProfileIcon from "../reusable/profile-icon";

const CurrentSelectUser = () => {
  const { selectedConversation, onlineUsersList } = useConversation();

  let avatar = selectedConversation?.avatar;
  let username = selectedConversation?.username;
  let isUserOnline = onlineUsersList.some(userId => userId === selectedConversation?._id)

  return (
    <div className="flex gap-3 items-center font-poppins">
      <ProfileIcon variant="small" src={avatar} username={username} />
      <div>
        <p className="selected-user text-xl text-primaryText capitalize font-semibold md:text-base">
          {username}
        </p>
        <p className={`leading-2 text-xs font-nunito font-semibold ${isUserOnline ? "text-online" : "text-offline"}`}>{isUserOnline ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
};
export default CurrentSelectUser;
