export type User = {
  username: string;
  _id: string | undefined;
  refreshToken: string;
  avatar: string;
};

export const getLocalStorageUser = () => {
  return localStorage.getItem("user");
};

export const setUserInLocalStorage = ({ newUser }: { newUser: User }) => {
  const { username, _id, refreshToken, avatar } = newUser;
  const user: User = { username, _id, refreshToken, avatar };

  try {
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User setted in localStorage");
  } catch (error) {
    console.log("Error in setting user in localStorage");
  }
};
