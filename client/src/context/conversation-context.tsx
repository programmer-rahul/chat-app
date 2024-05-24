import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { MessageType } from "../components/chat/chats-bar/conversation.js";

export type Conversation = {
  _id: string,
  username: string,
  avatar?: string,
  isOnline?: boolean,
}

type ConversationContextType = {
  allConversations: Conversation[];
  selectedConversation: Conversation | null;
  selectedConversationMessages: MessageType[];
  onlineUsersList: string[];

  setAllConversations: Dispatch<SetStateAction<Conversation[]>>
  setSelectedConversation: Dispatch<SetStateAction<Conversation | null>>;
  setSelectedConversationMessages: Dispatch<SetStateAction<MessageType[]>>
  setOnlineUsersList: Dispatch<SetStateAction<string[]>>;

};

const ConversationContext = createContext<ConversationContextType>({
  allConversations: [],
  selectedConversation: null,
  selectedConversationMessages: [],
  onlineUsersList: [],

  setAllConversations: () => { },
  setSelectedConversation: () => { },
  setSelectedConversationMessages: () => { },
  setOnlineUsersList: () => { },
});

export const ConversationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {


  const [allConversations, setAllConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [selectedConversationMessages, setSelectedConversationMessages] = useState<MessageType[]>([]);

  const [onlineUsersList, setOnlineUsersList] = useState<string[]>([]);

  return (
    <ConversationContext.Provider
      value={{
        allConversations,
        selectedConversation,
        selectedConversationMessages,
        onlineUsersList,
        setAllConversations,
        setSelectedConversation,
        setSelectedConversationMessages,
        setOnlineUsersList
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversation = () => useContext(ConversationContext);
