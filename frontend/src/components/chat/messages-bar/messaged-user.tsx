import ProfileIcon from "../reusable/profile-icon";

const MessagedUser = () => {
  return (
    <div className="user flex gap-2 items-center w-full">
      <div>
        <ProfileIcon isPrimary={true} />
      </div>
      <div className="flex flex-col w-full h-full justify-between py-2">
        <p className="username text-primaryText text-lg">Jordan Smith</p>
        <div className="flex justify-between w-full text-secondaryText text-sm md:text-xs">
          <p className="message">Hey Wat's app buddy</p>
          <p className="last-online">20m</p>
        </div>
      </div>
    </div>
  );
};
export default MessagedUser;
