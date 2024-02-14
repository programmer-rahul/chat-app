import { useEffect, useState } from "react";
import MessagedUser from "./messaged-user";
import { getAllUsers } from "../../../services/api";

const MessagesBar = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(({ data }) => setAllUsers(data));
  }, []);

  return (
    <div className="h-full">
      <div className="main h-full">
        <h2 className="text-base text text-primaryMessage h-[4%] md:text-xl">
          Messages
        </h2>

        <div className="users flex flex-col justify-start gap-4 h-[96%] overflow-y-scroll overflow-x-hidden no-scrollbar pb-6">
          {allUsers.map(({ username, _id }, index) => (
            <MessagedUser key={index} username={username} _id={_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesBar;
