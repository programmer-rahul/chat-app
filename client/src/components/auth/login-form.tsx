import { useState } from "react";
import Button from "../reusable/button";
import Input from "../reusable/input";
import Label from "../reusable/label";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    // TODO : Field validations

    if (username?.trim() === "" || password?.trim() === "") {
      console.log("All Fields required");
      return;
    }

    // TODO : Call api
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
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-sm text-secondaryText text-center">
            <span>Don't have any account!,</span>
            <span className="text-primaryText font-semibold text-base cursor-pointer">
              Sign up
            </span>
          </div>
          <Button
            type="secondary"
            btnType="submit"
            text="login"
            handleClick={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
