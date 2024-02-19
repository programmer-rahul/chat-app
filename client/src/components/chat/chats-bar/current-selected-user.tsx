import { useConversation } from "../../../context/conversation-context";
import ProfileIcon from "../reusable/profile-icon";

const CurrentSelectUser = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="flex gap-2">
      <ProfileIcon isPrimary={false} src={selectedConversation?.avatar} username={selectedConversation?.username} />
      <p className="selected-user text-xl text-primaryText capitalize font-semibold md:text-base">
        {selectedConversation?.username}
      </p>
    </div>
  );
};
export default CurrentSelectUser;
