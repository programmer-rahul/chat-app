import ProtectedRoutes from "./components/auth/protected-route";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
