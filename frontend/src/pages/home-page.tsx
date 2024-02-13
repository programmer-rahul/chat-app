import GetStartedPage from "./get-started-page";
import ChatPage from "./chat-page";

const HomePage = () => {
  return (
    <>{localStorage.getItem("user") ? <ChatPage /> : <GetStartedPage />}</>
  );
};
export default HomePage;
