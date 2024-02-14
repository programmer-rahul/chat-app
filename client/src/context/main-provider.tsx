import { AuthProvider } from "./auth-context";
import { MessageProvider } from "./message-context";
import { ThemeProvider } from "./theme-provider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <MessageProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </MessageProvider>
    </AuthProvider>
  );
};

export default MainProvider;
