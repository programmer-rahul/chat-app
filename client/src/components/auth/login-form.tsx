import { useEffect, useState } from "react";
import Button from "../reusable/button";
import Input from "../reusable/input";
import Label from "../reusable/label";
import { Link } from "react-router-dom";
import useAxios from "../../services/api";
import { useAuth } from "../../context/auth-context";
import { Errors, UserFields } from "../../utils/types";
import { formValidations } from "../../utils/validations";
import { setUserInLocalStorage } from "../../utils/local-storage";

const LoginForm = () => {
  const { fetchData, response } = useAxios();
  const { setIsAuth } = useAuth();

  const [userFields, setUserFields] = useState<UserFields>({
    username: "",
    password: ""
  })

  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (response) {
      if (response.status) {
        response.data && setUserInLocalStorage(response?.data.user); setIsAuth(true)
      }
      else {
        setErrors(prev => { return { ...prev, apiError: response.message } });
        console.log("error in login", errors);
      }
    }
  }, [response]);

  const submitHandler = async () => {
    if (!formValidations({ userFields, setErrors })) return console.log('Validation Failed!');

    await fetchData({ url: "/user/login", method: "post", data: { username: userFields.username, password: userFields.password }, withCredentials: true });
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 h-full ">
        <div className="flex flex-col h-[60%]">
          <div className="space-y-2 h-[40%] ">
            <Label text="Username" />
            <Input
              placeholder="Enter your username"
              value={userFields.username}
              onChange={(e) => setUserFields(prev => { return { ...prev, username: e.target.value } })}
            />
            {
              errors?.username && <p className="text-red-600">{errors.username}</p>
            }
          </div>
          <div className="space-y-2 h-[40%]">
            <Label text="Password" htmlFor="password" />
            <Input
              placeholder="Enter your password"
              type="password"
              value={userFields.password}
              onChange={(e) => setUserFields(prev => { return { ...prev, password: e.target.value } })}
            />
            {
              errors?.password && <p className="text-red-600">{errors.password}</p>
            }
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
