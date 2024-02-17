import { useState } from "react";
import Button from "../reusable/button";
import Input from "../reusable/input";
import Label from "../reusable/label";
import { Link } from "react-router-dom";
import useAxios from "../../services/api";
import { useAuth } from "../../context/auth-context";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { fetchData } = useAxios();
  const { setIsAuth } = useAuth();


  const submitHandler = async () => {
    // TODO : Field validations
    if (username?.trim() === "" || password?.trim() === "") {
      console.log("All Fields required");
      return;
    }

    // TODO : Call api
    const data = await fetchData({ url: "/user/login", method: "post", data: { username, password }, withCredentials: true })

    console.log("Data :- ", data);

    if (!data.status) return console.log("Error in login");

    console.log(data.data.user);
    // await setUserInLocalStorage(data.data.user);

    try {
      localStorage.setItem("user", JSON.stringify(data.data.user));
      console.log("User setted in localStorage");
    } catch (error) {
      console.log("Error in setting user in localStorage");
    }

    setIsAuth(true);

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
              <Link to="/signup">Sign up</Link>
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
