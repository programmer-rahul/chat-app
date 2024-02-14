import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageUser } from "../../utils/local-storage";

const ProctedRoute = () => {
  const isUser = getLocalStorageUser();

  // return isUser ? <Outlet /> : <Navigate to={"/"} />;
  return <Outlet />;
};
export default ProctedRoute;
