import { useEffect } from "react";
import { useConversation } from "../../../context/conversation-context";
import ChatTopBar from "./chat-top-bar";
import Conversation from "./conversation";
import SendingInputBar from "./sending-input-bar";
import useAxios, { getCurrentConversation } from "../../../services/api";
import socket from "../../../services/socket";

const ChatsBar = () => {
  const { selectedConversation, currentUser, selectedConversationMessages, setSelectedConversationMessages } = useConversation();
  const { response, fetchData } = useAxios();

  // useEffect(() => {
  //   // fetch conversation from db of selected conversation
  //   if (selectedConversation) {
  //     getCurrentConversation(currentUser?._id).then((data) => {
  //       if (!data?.status) return console.log("Something wrong");
  //       setSelectedConversationMessages(data.data);
  //     });
  //   }
  // }, [selectedConversation]);


  useEffect(() => {
    selectedConversation && fetchData({ url: `/message/get-conversation/${currentUser?._id}`, method: "get" })
  }, [selectedConversation]);

  useEffect(() => {
    if (response) {
      console.log(response);
      if (response.status) {
        response.data && setSelectedConversationMessages(response.data.conversation);
      }
      else {
        console.log("Error in fetching conversations");
      }
    }
  }, [response]);

  useEffect(() => {
    socket
      .on('recieve-message', (data: {}) => {
        console.log("Message Recieved :- ", data);
        let tempMessages = [...selectedConversationMessages, data];
        console.log(tempMessages)

        setSelectedConversationMessages(tempMessages);
      })
  }, []);

  return (
    <div className="h-full">
      {selectedConversation ? (
        <div className="main h-full px-4">
          <ChatTopBar />
          <Conversation />
          <SendingInputBar />
        </div>
      ) : (
        <WelcomeMessage />
      )}
    </div>
  );
};

const WelcomeMessage = () => {
  return (
    <div className="text-center mt-40">
      <p className="text-3xl text-primaryText">Select chat to get started</p>
    </div>
  );
};

export default ChatsBar;