import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { User } from "../utils/local-storage.js";
import { MessageType } from "../components/chat/chats-bar/conversation.js";

type Conversation = {
  _id: string,
  username: string,
}


type ConversationContextType = {
  currentUser: User | null;
  allConversations: Conversation[];
  selectedConversation: Conversation | null;
  selectedConversationMessages: MessageType[] | [];

  setCurrentUser: Dispatch<SetStateAction<null | string>>;
  setAllConversations: Dispatch<SetStateAction<never[]>>
  setSelectedConversation: Dispatch<SetStateAction<Conversation | null>>;
  setSelectedConversationMessages: Dispatch<SetStateAction<never[]>>
};

const ConversationContext = createContext<ConversationContextType>({
  selectedConversation: null,
  setSelectedConversation: () => { },
  currentUser: {},
  setCurrentUser: () => { },
  // currentChatMessages: [],
  // setCurrentChatMessages: () => { },
});

export const ConversationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [allConversations, setAllConversations] = useState([]);

  const [selectedConversation, setSelectedConversation] = useState(null);

  const [selectedConversationMessages, setSelectedConversationMessages] = useState([]);

  return (
    <ConversationContext.Provider
      value={{
        currentUser,
        allConversations,
        selectedConversation,
        selectedConversationMessages,
        setCurrentUser,
        setAllConversations,
        setSelectedConversation,
        setSelectedConversationMessages

      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversation = () => useContext(ConversationContext);
