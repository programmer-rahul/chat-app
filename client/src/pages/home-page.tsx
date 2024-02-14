import GetStartedPage from "./get-started-page";
import ChatPage from "./chat-page";
import { useAuth } from "../context/auth-context";

const HomePage = () => {
  const { isAuth } = useAuth();

  return <>{isAuth ? <ChatPage /> : <GetStartedPage />}</>;
};
export default HomePage;
