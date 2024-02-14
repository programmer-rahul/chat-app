import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type MessageContextType = {
  selectedConversation: string | null;
  setSelectedConversation: Dispatch<SetStateAction<null | string>>;
};

const MessageContext = createContext<MessageContextType>({
  selectedConversation: null,
  setSelectedConversation: () => {},
});

export const MessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <MessageContext.Provider
      value={{ selectedConversation, setSelectedConversation }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
