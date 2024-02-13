import MessagedUser from "./messaged-user";

const MessagesBar = () => {
  return (
    <div className="h-full">
      <div className="main h-full">
        <h2 className="text-base text text-primaryMessage h-[4%] md:text-xl">
          Messages
        </h2>

        <div className="users flex flex-col justify-start gap-4 h-[96%] overflow-y-scroll overflow-x-hidden no-scrollbar pb-6">
          <MessagedUser />
          <MessagedUser />
          <MessagedUser />
          <MessagedUser />
          <MessagedUser />
          <MessagedUser />
          <MessagedUser />
        </div>
      </div>
    </div>
  );
};

export default MessagesBar;
