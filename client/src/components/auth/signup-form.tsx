import { useState } from "react";
import Button from "../reusable/button";
import Input from "../reusable/input";
import Label from "../reusable/label";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api";
import { useAuth } from "../../context/auth-context";
import { setUserInLocalStorage } from "../../utils/local-storage";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  const submitHandler = async () => {
    // TODO : Field validations

    if (username?.trim() === "" || password?.trim() === "") {
      console.log("All Fields required");
      return;
    }
    if (password?.trim() !== confPassword?.trim()) {
      console.log("Password should be same");
      return;
    }

    const data = await registerUser({ username, password });
    // console.log(data);
    if (data?.status !== true) {
      return console.log("Error in register");
      // TODO : Handle error
    }
    // setUserInLocalStorage
    setUserInLocalStorage(data?.data);
    setIsAuth(true);

    navigate("/");
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 h-full ">
        <div className="flex flex-col h-[60%] gap-4">
          <div className="space-y-2">
            <Label text="Username" />
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="space-y-2">
            <Label text="Password" htmlFor="password" />
            <Input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="space-y-2">
            <Label text="Confirm Password" htmlFor="password" />
            <Input
              placeholder="Type Confirm password"
              type="password"
              value={confPassword}
              onChange={(e) => {
                setConfPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-sm text-secondaryText text-center">
            <span>Already have an acccount!,</span>
            <span className="text-primaryText font-semibold text-base cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </div>
          <Button
            type="secondary"
            btnType="submit"
            text="sign up"
            handleClick={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
