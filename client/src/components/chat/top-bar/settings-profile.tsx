import { useEffect } from "react";
import { useAuth } from "../../../context/auth-context";
import useAxios from "../../../services/api";

const Settings_Profile = () => {
  const { setIsAuth } = useAuth();
  const { fetchData, response } = useAxios();

  useEffect(() => {
    if (response) {
      if (response.status) {
        response.data && localStorage.removeItem('user'); setIsAuth(false);
      }
    }
  }, [response]);

  const logoutHandler = async () => {
    await fetchData({ url: "/user/logout", method: "get", withCredentials: true });
  }

  return (
    <div className="right-corner flex gap-4 items-center" onClick={logoutHandler}>
      <div className="setting w-10 h-10 rounded-full border border-border place-items-center hidden sm:grid">
        {/* TODO : Setting icon  */}
        <h1>S</h1>
      </div>
      <div className="profile w-10 h-10 rounded-full grid place-items-center">
        <img
          src="profile.png"
          alt="profile.svg"
          className="rounded-full h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export default Settings_Profile;
