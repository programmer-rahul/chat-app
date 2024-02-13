import { useNavigate } from "react-router-dom";
import AppLogo from "../components/chat/top-bar/app-logo";
import Button from "../components/reusable/button";

const GetStartedPage = () => {
  const navigate = useNavigate();
  const btnHandler = () => {
    console.log("cllicke");
    navigate("/login");
  };

  return (
    <div className="get-started w-full h-screen">
      <div className="bg-secondaryMessage flex items-center justify-center h-full">
        <div className="container  bg-background shadow-2xl rounded-xl p-8 flex gap-20 flex-col items-center  w-[600px] h-4/5 justify-around">
          <div className="scale-150 mt-32">
            <AppLogo />
          </div>
          <div className="flex flex-col items-center gap-4 text-xl">
            <p className="text-secondaryText text-center">
              Our chat community is a vibrant space where you can connect with
              friends, meet new people, and engage in real-time conversations.
            </p>

            <Button
              type="secondary"
              styles="w-full"
              text="get started"
              handleClick={btnHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetStartedPage;
