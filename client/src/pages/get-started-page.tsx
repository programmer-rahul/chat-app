import { useNavigate } from "react-router-dom";
import AppLogo from "../components/chat/top-bar/app-logo";
import Button from "../components/reusable/button";

const GetStartedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="get-started w-full h-screen bg-secondaryBackground font-nunito">
      <div className="flex items-center justify-center h-full">
        <div className="bg-background shadow-2xl rounded-xl px-12 py-10 flex gap-10 flex-col w-[600px] h-4/5 justify-around sm:w-4/5 sm:px-6 sm:py-4 sm:gap-6">
          {/* heading  */}
          <div className="logo font-semibold font-poppins text-primaryText pb-8 self-center sm:pb-6">
            <h1>
              <span className="text-3xl">Welcome to </span>
              <AppLogo />
            </h1>
          </div>

          {/* tagline */}
          <div className="text-2xl sm:text-2xl relative w-full text-center text-primaryText self-center flex flex-col items-center">
            <hr className="absolute left-1/2 top-1/2 border-[3px] border-border w-full -translate-x-1/2 -translate-y-1/2 rounded-sm" />
            <p className="relative z- bg-background inline-block px-2 sm:text-xl">
              Connect, Communicate, Chat
            </p>
          </div>

          <div className="flex flex-col gap-10 ">
            <p className="text-secondaryText text-justify text-xl">
              Our chat community is a vibrant space where you can connect with
              friends, meet new people, and engage in real-time conversations.
            </p>

            <Button
              type="primary"
              size="2xl"
              text="start chatting"
              handleClick={() => {
                navigate("/signup");
              }}
            />
            <div className="text-secondaryText text-lg">
              <span>Have a ChatCircle account? </span>
              <span
                className="text-primaryText font-semibold font-poppins text-xl cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetStartedPage;
