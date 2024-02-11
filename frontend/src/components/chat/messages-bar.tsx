import { useTheme } from "../../context/theme-provider";
import User from "./user";

const MessagesBar = () => {
  const { currentTheme } = useTheme();
  return (
    <div>
      <div className="main ">
        <h2 className="text-2xl text-center mb-3">Messages</h2>

        <div className="users flex flex-col justify-start gap-6 pr-2">
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
};

export default MessagesBar;
