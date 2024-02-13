import { createContext, useContext, useState } from "react";

const FIXEDCOLOR = {
  first: `[#352F44]`,
  second: `[#5C5470]`,
  third: `[#a39w29]`,
  fourth: `[#FAF0E6]`,
};

const Themes: Theme[] = [
  {
    primary_bg: "bg-[#352F44]",
    secondary_bg: "bg-[#352F44]",

    primary_text: "text-[#FAF0E6]",
    secondary_text: "text-[#a1a1aa]",

    primary_btn_Bg: "bg-[#5C5470]",
    secondary_btn_Bg: "bg-[#FAF0E6]",

    primary_btn_text: "text-[#FAF0E6]",
    secondary_btn_text: "text-[#FAF0E6]",

    input_bg: "bg-[#5C5470]",
    input_text: "text-[#FAF0E6]",

    message_bg: "bg-[#a39w29]",
    message_text: "text-[#FAF0E6]",

    border: "border-[#737373]",
  },
];
console.log(Themes[0]);

type Theme = {
  primary_bg: string;
  secondary_bg: string;

  primary_text: string;
  secondary_text: string;

  primary_btn_text: string;
  secondary_btn_text: string;

  primary_btn_Bg: string;
  secondary_btn_Bg: string;

  input_bg: string;
  input_text: string;

  message_bg: string;
  message_text: string;

  border: string;
};

type ThemeContextType = {
  currentTheme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: Themes[0],
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Themes[0]);

  const toggleTheme = () => {
    setCurrentTheme(Themes[0]);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
