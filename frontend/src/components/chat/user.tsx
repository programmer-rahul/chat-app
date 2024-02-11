import { useTheme } from "../../context/theme-provider";
import ProfileIcon from "./profile-icon";

const User = () => {
  const { currentTheme } = useTheme();
  return (
    <div className="user flex gap-4 items-center w-full">
      <div>
        <ProfileIcon />
      </div>
      <div className="flex flex-col w-full">
        <p className="username">Jordan Smith</p>
        <div
          className={`text-sm flex justify-between gap-1 w-full ${currentTheme.secondary_text}`}
        >
          <p className="message">Hey Wat's app buddy</p>
          <p className="last-online">20m</p>
        </div>
      </div>
    </div>
  );
};
export default User;
