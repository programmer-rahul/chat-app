import Message from "../messages-bar/message";

const FullChats = () => {
  return (
    <div className="chats border-b flex flex-col justify-start gap-6 pr-2 h-[84%] overflow-y-scroll overflow-x-hidden no-scrollbar pb-6">
      <Message isCurrentUser={false} />
      <Message isCurrentUser={true} />
      <Message isCurrentUser={false} />
      <Message isCurrentUser={true} />
      <Message isCurrentUser={false} />
      <Message isCurrentUser={true} />
      <Message isCurrentUser={false} />
      <Message isCurrentUser={true} />
      <Message isCurrentUser={false} />
      <Message isCurrentUser={true} />
      <Message isCurrentUser={false} />
      <Message isCurrentUser={false} />
    </div>
  );
};
export default FullChats;
