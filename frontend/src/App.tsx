import ChatPage from "./pages/chat-page";
import GetStartedPage from "./pages/get-started-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStartedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};
export default App;
