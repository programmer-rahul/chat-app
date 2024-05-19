import { useNavigate } from "react-router-dom";
import AppLogo from "../components/chat/top-bar/app-logo";
import Button from "../components/reusable/button";

const GetStartedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="get-starte w-full h-screen bg-secondaryBackground font-nunito">
      <div className="flex items-center justify-center h-full">
        <div className="bg-background shadow-2xl rounded-xl px-12 py-10 flex gap-10 flex-col w-[600px] h-4/5 justify-around">
          {/* heading  */}
          <div className="pb-8 self-center">
            <AppLogo />
          </div>

          {/* tagline */}
          <div className="text-2xl relative w-full text-center text-primaryText self-center">
            <hr className="absolute left-1/2 top-1/2 border-[3px] border-border w-full -translate-x-1/2 -translate-y-1/2 z-10" />
            <p className="relative z-20 bg-background inline-block px-2">
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
