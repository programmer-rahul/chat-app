import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { User } from "../utils/local-storage.js";

type MessageContextType = {
  selectedConversation: string | null;
  currentUser: User | null;

  setSelectedConversation: Dispatch<SetStateAction<null | string>>;
  setCurrentUser: Dispatch<SetStateAction<null | string>>;
};

const MessageContext = createContext<MessageContextType>({
  selectedConversation: null,
  setSelectedConversation: () => {},
  currentUser: {},
  setCurrentUser: () => {},
});

export const MessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <MessageContext.Provider
      value={{
        selectedConversation,
        setSelectedConversation,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
