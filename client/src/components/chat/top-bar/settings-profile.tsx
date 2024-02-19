import { useEffect } from "react";
import { useAuth } from "../../../context/auth-context";
import useAxios from "../../../services/api";
import ProfileIcon from "../reusable/profile-icon";

const SettingsProfile = () => {
  const { setIsAuth, setCurrentUser, currentUser } = useAuth();
  const { fetchData, response } = useAxios();

  useEffect(() => {
    if (response) {
      if (response.status) {
        response.data && localStorage.removeItem('user'); setIsAuth(false); setCurrentUser(null);
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

      <ProfileIcon isPrimary={true} src={currentUser?.avatar} username={currentUser?.username} />
    </div>
  );
};
export default SettingsProfile;
