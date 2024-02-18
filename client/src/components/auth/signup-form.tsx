import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../reusable/button";
import Input from "../reusable/input";
import Label from "../reusable/label";
import { Link } from "react-router-dom";
import useAxios from "../../services/api";
import { setUserInLocalStorage } from "../../utils/local-storage";
import { Errors, UserFields } from "../../utils/types";
import { formValidations } from "../../utils/validations";

const SignUpForm = ({ setCompleted }: { setCompleted: Dispatch<SetStateAction<boolean>> }) => {

  const [userFields, setUserFields] = useState<UserFields>({ username: "", password: "", confPassword: "" });
  const [errors, setErrors] = useState<Errors>({});
  const { fetchData, response } = useAxios();

  useEffect(() => {
    if (response) {
      if (response.status) {
        response.data && setUserInLocalStorage(response?.data.user); setCompleted(true);
      }
      else {
        setErrors(prev => { return { ...prev, apiError: response.message } });
        console.log("error in register", errors);
      }
    }
  }, [response]);

  const submitHandler = async () => {

    if (!formValidations({ userFields, setErrors })) return console.log('Validation Failed!');
    await fetchData({ url: "/user/register", data: userFields, method: "post", withCredentials: true })

  };

  return (
    <div className="container bg-background shadow-2xl rounded-xl p-8 py-16 flex gap-16 flex-col items-start  w-[600px] h-4/5">
      <div className="w-full h-full">
        <div className="flex flex-col gap-4 h-full ">
          <h2 className="text-primaryText font-semibold text-3xl">Signup</h2>
          <div className="flex flex-col h-[60%]">
            <div className="space-y-2 h-[30%] ">
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
            <div className="space-y-2 h-[30%]">
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
            <div className="space-y-2 h-[30%]">
              <Label text="Confirm Password" htmlFor="password" />
              <Input
                placeholder="Type Confirm password"
                type="password"
                value={userFields.confPassword}
                onChange={(e) => setUserFields(prev => { return { ...prev, confPassword: e.target.value } })}

              />
              {
                errors?.confPassword && <p className="text-red-600">{errors.confPassword}</p>
              }
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

