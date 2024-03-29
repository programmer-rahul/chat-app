import { useState } from "react";
import Button from "../../reusable/button";
import { sendMessage } from "../../../services/api";
import { useMessage } from "../../../context/message-context";

const SendingInputBar = () => {
  const [messageText, setMessageText] = useState("");
  const { currentUser, selectedConversation } = useMessage();

  const btnHandler = () => {
    if (messageText.trim() === "") {
      console.log("message should not be empty");
      // TODO : Handle make button unWorkable if text is empty
      return;
    }

    // call api
    sendMessage({
      messageText,
      sender: currentUser?._id,
      recipient: selectedConversation,
    });

    // console.log(currentUser);
    // console.log(selectedConversation);
  };
  return (
    <div className="h-[10%] sending-panel">
      <div className="px-4 md:px-2 flex gap-4 md:gap-2 justify-center items-center h-full w-full">
        <div className="user-text-input w-[60%] md:w-[70%]">
          <input
            type="text"
            placeholder="Type something here..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="bg-secondaryMessage text-inputText  outline-none px-4 py-3 text-sm rounded-xl w-full"
          />
        </div>
        <div className="emoji-input grid">
          <p className="h-10 w-10 border rounded-full"></p>
        </div>
        <div className="send-message">
          <Button type="primary" handleClick={btnHandler} />
        </div>
      </div>
    </div>
  );
};
export default SendingInputBar;
