import { useConversation } from "../../../context/conversation-context";
import ProfileIcon from "../reusable/profile-icon";

const CurrentSelectUser = () => {
  const { selectedConversation } = useConversation();

  let avatar = selectedConversation?.avatar;
  let username = selectedConversation?.username;

  return (
    <div className="flex gap-2 items-center font-poppins">
      <ProfileIcon variant="small" src={avatar} username={username} />
      <div>
        <p className="selected-user text-xl text-primaryText capitalize font-semibold md:text-base">
          {username}
        </p>
        <p className=" text-emerald-600 leading-4 text-xs">Online</p>
      </div>
    </div>
  );
};
export default CurrentSelectUser;
