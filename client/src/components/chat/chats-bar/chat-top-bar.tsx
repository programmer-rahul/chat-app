import CurrentSelectUser from "./current-selected-user";

const ChatTopBar = () => {
  return (
    <div className="top h-[6%] w-full items-start flex justify-between">
      <CurrentSelectUser />
      <p>I</p>
    </div>
  );
};
export default ChatTopBar;
