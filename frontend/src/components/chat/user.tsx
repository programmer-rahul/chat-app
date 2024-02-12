import ProfileIcon from "./profile-icon";

const User = () => {
  return (
    <div className="user flex gap-4 items-center w-full">
      <div>
        <ProfileIcon />
      </div>
      <div className="flex flex-col w-full">
        <p className="username text-primaryText">Jordan Smith</p>
        <div className="text-sm flex justify-between gap-1 w-full text-secondaryText">
          <p className="message">Hey Wat's app buddy</p>
          <p className="last-online">20m</p>
        </div>
      </div>
    </div>
  );
};
export default User;