import { AuthProvider } from "./auth-context";
import { ConversationProvider } from "./conversation-context";
import { ThemeProvider } from "./theme-provider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ConversationProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ConversationProvider>
    </AuthProvider>
  );
};

export default MainProvider;
