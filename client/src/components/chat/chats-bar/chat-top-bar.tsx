import CurrentSelectUser from "./current-selected-user";

const ChatTopBar = () => {
  return (
    <div className="top h-[6%] w-full flex justify-between border-b border-border items-center p-2">
      <CurrentSelectUser />
    </div>
  );
};
export default ChatTopBar;
