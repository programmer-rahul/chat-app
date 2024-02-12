import User from "./user";

const MessagesBar = () => {
  return (
    <div className="h-full ">
      <div className="main h-full  ">
        <h2 className="text-2xl text-center  text text-secondaryMessage h-[8%]">
          Messages
        </h2>

        <div className="users flex flex-col justify-start gap-6 pr-2 h-[92%] overflow-y-scroll overflow-x-hidden no-scrollbar pb-6">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
};

export default MessagesBar;
