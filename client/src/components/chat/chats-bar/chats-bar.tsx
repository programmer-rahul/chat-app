import { useEffect } from "react";
import { useConversation } from "../../../context/conversation-context";
import ChatTopBar from "./chat-top-bar";
import Conversation, { MessageType } from "./conversation";
import SendingInputBar from "./sending-input-bar";
import useAxios from "../../../services/api";
import socket from "../../../services/socket";

import { format } from 'date-fns'

const ChatsBar = () => {
  const { selectedConversation, setSelectedConversationMessages, selectedConversationMessages } = useConversation();
  const { response, fetchData } = useAxios();

  useEffect(() => {
    selectedConversation && fetchData({ url: `/message/get-conversation/${selectedConversation._id}`, method: "get", withCredentials: true })
  }, [selectedConversation]);

  useEffect(() => {
    if (response) {
      if (response.status) {
        response.data && setSelectedConversationMessages(response.data.conversation as MessageType[]);
        if (response.data?.conversation) {
          const formated = format(new Date(response.data?.conversation[0].createdAt), 'p')
          console.log(formated);
        }

      }
      else {
        console.log("Error in fetching conversations");
      }
    }
  }, [response]);
  socket
    .on('recieve-message', (data: MessageType) => {
      console.log("Message Recieved :- ", data);
      setSelectedConversationMessages([...selectedConversationMessages, data]);
    })

  return (
    <div className="h-full">
      {selectedConversation ? (
        <div className="main h-full px-4">
          <ChatTopBar />
          <Conversation />
          <SendingInputBar />
        </div>
      ) : (
        <NoConversationSelectedMessage />
      )}
    </div>
  );
};

const NoConversationSelectedMessage = () => {
  return (
    <div className="text-center mt-40">
      <p className="text-3xl text-primaryText">Select chat to get started</p>
    </div>
  );
};

export default ChatsBar;