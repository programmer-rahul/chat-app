import { AuthProvider } from "./auth-context";
import { ThemeProvider } from "./theme-provider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default MainProvider;
