import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const ProtectedRoutes = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to={"/"} /> : <Outlet />
};
export default ProtectedRoutes;
