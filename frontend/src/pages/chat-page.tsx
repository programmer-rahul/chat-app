import { useEffect } from "react";
import MessagesBar from "../components/chat/messages-bar";
import TopBar from "../components/chat/top-bar";
import { useTheme } from "../context/theme-provider";

const ChatPage = () => {
  const { currentTheme } = useTheme();
  // console.log(currentTheme);
  useEffect(() => {
    console.log(currentTheme);
  }, []);

  return (
    <main className="w-screen h-screen">
      <div
        className={`chat-main w-full h-full px-4 py-3 ${currentTheme.primary_bg} ${currentTheme.primary_text}`}
      >
        <div className="topbar h-[10%]  ">
          <TopBar />
        </div>
        <div className="h-[90%] w-full flex pt-4 pb-2">
          <div className="messages-bar w-[35%]">
            <MessagesBar />
          </div>
          <div className="chats-bar border w-full"></div>
          <div className="current-user-bar border w-[35%]"></div>
        </div>
      </div>
    </main>
  );
};
export default ChatPage;
