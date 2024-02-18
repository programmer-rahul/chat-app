import { useEffect } from "react";
import MessagedUser from "./messaged-user";
import useAxios, { getAllUsers } from "../../../services/api";
import { useConversation } from "../../../context/conversation-context";

const MessagesBar = () => {
  const { allConversations, setAllConversations } = useConversation();
  const { fetchData, response } = useAxios();

  useEffect(() => {
    fetchData({ url: "/user/all-users", method: 'get', withCredentials: true })
  }, []);

  useEffect(() => {
    if (response) {
      if (response.status) {
        response.data && setAllConversations(response.data.user);
      } else {
        console.log("Error in fetching all users");
      }
    }
  }, [response]);

  return (
    <div className="h-full">
      <div className="main h-full">
        <h2 className="text-base text text-primaryMessage h-[4%] md:text-xl">
          Messages
        </h2>

        <div className="users flex flex-col justify-start gap-4 h-[96%] overflow-y-scroll overflow-x-hidden no-scrollbar pb-6">
          {allConversations?.map(({ _id, username }, index) => (
            <MessagedUser key={index} username={username} _id={_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesBar;
