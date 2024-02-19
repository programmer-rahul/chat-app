import { createContext, useContext } from "react";

type ThemeContextType = {};

export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
