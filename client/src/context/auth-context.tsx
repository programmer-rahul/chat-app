import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  isAuth: string | true | null;
  setIsAuth: Dispatch<SetStateAction<true | null>>;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: null,
  setIsAuth: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("user") || null);
  // console.log("Is Auht :- ", isAuth);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
