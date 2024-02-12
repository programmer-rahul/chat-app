import Message from "./message";

const ChatsBar = () => {
  return (
    <div className="h-full">
      <div className="main h-full px-4">
        <div className="top h-[6%] w-full items-start flex justify-between">
          <p className="selected-user text-xl text-primaryText font-semibold">
            Luffy D Monkey
          </p>
          <p>I</p>
        </div>

        <div className="chats border-b flex flex-col justify-start gap-6 pr-2 h-[84%] overflow-y-scroll overflow-x-hidden no-scrollbar pb-6">
          <Message isCurrentUser={false} />
          <Message isCurrentUser={true} />
          <Message isCurrentUser={false} />
          <Message isCurrentUser={true} />
          <Message isCurrentUser={false} />
          <Message isCurrentUser={true} />
          <Message isCurrentUser={false} />
          <Message isCurrentUser={true} />
          <Message isCurrentUser={false} />
          <Message isCurrentUser={true} />
          <Message isCurrentUser={false} />
          <Message isCurrentUser={false} />
        </div>

        <div className="h-[10%] sending-panel ">
          <div className="px-4 flex gap-4 justify-center items-center h-full w-full">
            <div className="user-text-input w-[60%]">
              <input
                type="text"
                placeholder="Type something here..."
                className="bg-secondaryMessage text-inputText  outline-none px-4 py-3 text-sm rounded-xl w-full"
              />
            </div>
            <div className="emoji-input grid">
              <p className="h-10 w-10 border rounded-full"></p>
            </div>
            <div className="send-message">
              <button className="bg-primaryBtn h-10 text-primaryBtnText px-8 py-1 rounded-md transition-all hover:opacity-80">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsBar;
