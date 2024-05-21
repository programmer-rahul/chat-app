import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../utils/types";

type AuthContextType = {
  isAuth: boolean;
  currentUser: User | null;

  setIsAuth: Dispatch<SetStateAction<boolean>>;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  currentUser: null,

  setIsAuth: () => {},
  setCurrentUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('user') ? true : false);
  // const [isAuth, setIsAuth] = useState(true);

  const changeUser = () => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };
  const [currentUser, setCurrentUser] = useState(changeUser);

  useEffect(() => {
    setCurrentUser(changeUser);
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, currentUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
