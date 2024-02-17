import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../reusable/button";
import Input from "../reusable/input";
import Label from "../reusable/label";
import { Link } from "react-router-dom";
import useAxios from "../../services/api";
import { setUserInLocalStorage } from "../../utils/local-storage";
import { useAuth } from "../../context/auth-context";
import { Error } from "../../utils/types";

type UserFields = {
  username: string,
  password: string,
  confPassword: string,
}

const SignUpForm = ({ setCompleted }: { setCompleted: Dispatch<SetStateAction<boolean>> }) => {

  const [userFields, setUserFields] = useState<UserFields>({
    username: "",
    password: "",
    confPassword: ""
  });
  const [errors, setErrors] = useState<Error>({});
  const { fetchData, response } = useAxios();
  const { setIsAuth } = useAuth();


  // type Response = {
  //   data: Data | null,
  //   status: false,
  //   statusCode?: number,
  //   message: string,
  // }

  useEffect(() => {
    if (response) {
      console.log("inside useEffect :", response);
      if (response.status) {
        response.data && setUserInLocalStorage(response?.data.user); setIsAuth(true); setCompleted(true)
      }
      else {
        setErrors(prev => { return { ...prev, apiError: response.message } });
        console.log("error in register", errors);
      }
    }
  }, [response]);

  const submitHandler = async () => {

    if (!formValidations()) return console.log('Validation Failed!');
    await fetchData({ url: "/user/register", data: userFields, method: "post" })
    // console.log("response :", response);
  };

  const formValidations = () => {
    const { username, password, confPassword } = userFields;
    let errors: Error = {};

    if (username?.trim() === "") {
      errors.username = "Username is Required"
      console.log("yes")
    }
    if (password?.length < 6) {
      errors.password = "Password should be 6 character long"
    }
    if (password?.trim() === "") {
      errors.password = "Password is Required"
    }
    if (confPassword?.trim() === "") {
      errors.confPassword = "Confirm Password is Required";
    }
    if (password?.trim() !== confPassword?.trim()) {
      errors.confPassword = "Password and Confirm Password should be same"
    }

    setErrors(errors);

    return Object.keys(errors).length === 0 ? true : false
  }


  return (
    <div className="container bg-background shadow-2xl rounded-xl p-8 py-16 flex gap-16 flex-col items-start  w-[600px] h-4/5">
      <div className="w-full h-full">
        <div className="flex flex-col gap-4 h-full ">
          <h2 className="text-primaryText font-semibold text-3xl">Signup</h2>
          <div className="flex flex-col h-[60%] gap-4">
            <div className="space-y-2">
              <Label text="Username" />
              <Input
                placeholder="Enter your username"
                value={userFields.username}
                onChange={(e) => setUserFields(prev => { return { ...prev, username: e.target.value } })}
              />
            </div>
            <div className="space-y-2">
              <Label text="Password" htmlFor="password" />
              <Input
                placeholder="Enter your password"
                type="password"
                value={userFields.password}
                onChange={(e) => setUserFields(prev => { return { ...prev, password: e.target.value } })}

              />
            </div>
            <div className="space-y-2">
              <Label text="Confirm Password" htmlFor="password" />
              <Input
                placeholder="Type Confirm password"
                type="password"
                value={userFields.confPassword}
                onChange={(e) => setUserFields(prev => { return { ...prev, confPassword: e.target.value } })}

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
    </div>
  );
};
export default SignUpForm;

