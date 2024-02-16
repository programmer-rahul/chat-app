import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('user') ? true : false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
