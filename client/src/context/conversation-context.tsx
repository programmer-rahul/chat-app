import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { MessageType } from "../components/chat/chats-bar/conversation.js";

type Conversation = {
  _id: string,
  username: string,
  avatar?: string,
}

type ConversationContextType = {
  allConversations: Conversation[];
  selectedConversation: Conversation | null;
  selectedConversationMessages: MessageType[];

  setAllConversations: Dispatch<SetStateAction<Conversation[]>>
  setSelectedConversation: Dispatch<SetStateAction<Conversation | null>>;
  setSelectedConversationMessages: Dispatch<SetStateAction<MessageType[]>>
};

const ConversationContext = createContext<ConversationContextType>({
  allConversations: [],
  selectedConversation: null,
  selectedConversationMessages: [],

  setAllConversations: () => { },
  setSelectedConversation: () => { },
  setSelectedConversationMessages: () => { },
});

export const ConversationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {


  const [allConversations, setAllConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [selectedConversationMessages, setSelectedConversationMessages] = useState<MessageType[]>([]);

  return (
    <ConversationContext.Provider
      value={{
        allConversations,
        selectedConversation,
        selectedConversationMessages,
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
