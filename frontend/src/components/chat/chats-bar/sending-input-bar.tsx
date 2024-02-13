import Button from "../../reusable/button";

const SendingInputBar = () => {
  return (
    <div className="h-[10%] sending-panel">
      <div className="px-4 md:px-2 flex gap-4 md:gap-2 justify-center items-center h-full w-full">
        <div className="user-text-input w-[60%] md:w-[70%]">
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
          <Button type="primary" />
        </div>
      </div>
    </div>
  );
};
export default SendingInputBar;
