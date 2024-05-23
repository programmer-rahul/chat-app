import { useEffect } from "react";
import { useConversation } from "../../../context/conversation-context";
import ChatTopBar from "./chat-top-bar";
import Conversation, { MessageType } from "./conversation";
import SendingInputBar from "./sending-input-bar";
import useAxios from "../../../services/api";
import socket from "../../../services/socket";

const ChatsBar = () => {
  const { selectedConversation, setSelectedConversationMessages, selectedConversationMessages } = useConversation();
  const { response, fetchData } = useAxios();

  useEffect(() => {
    selectedConversation && fetchData({ url: `/message/get-conversation/${selectedConversation._id}`, method: "get", withCredentials: true })
  }, [selectedConversation]);

  useEffect(() => {
    response &&
      response.status &&
      response.data && setSelectedConversationMessages(response.data.conversation as MessageType[])

  }, [response]);

  socket
    .on('recieve-message', (data: MessageType) => {
      console.log("Message Recieved :- ", data);
      setSelectedConversationMessages([...selectedConversationMessages, data]);
    })

  return (
    <div className="h-full bg-secondaryBackground mx-4 rounded-md">
      {selectedConversation ? (
        <div className="main h-full px-4 bg-secondaryBackground rounded-md">
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
    <div className="text-center flex items-center justify-center pb-40 h-full">
      <p className="text-3xl text-primaryText">Select chat to get started</p>
    </div>
  );
};

export default ChatsBar;