import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../reusable/button";
import Input from "../reusable/input";
import Label from "../reusable/label";
import useAxios from "../../services/api";
import { setUserInLocalStorage } from "../../utils/local-storage";
import { Errors, UserFields } from "../../utils/types";
import { formValidations } from "../../utils/validations";
import { Link } from "react-router-dom";

const SignUpForm = ({
  setCompleted,
}: {
  setCompleted: Dispatch<SetStateAction<boolean>>;
}) => {
  const [userFields, setUserFields] = useState<UserFields>({
    username: "",
    password: "",
    confPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const { fetchData, response } = useAxios();

  useEffect(() => {
    if (response) {
      if (response.status) {
        response.data && setUserInLocalStorage(response?.data.user);
        setCompleted(true);
      } else {
        setErrors((prev) => {
          return { ...prev, apiError: response.message };
        });
        console.log("error in register", errors);
      }
    }
  }, [response]);

  const submitHandler = async () => {
    if (!formValidations({ userFields, setErrors }))
      return console.log("Validation Failed!");
    await fetchData({
      url: "/user/register",
      data: userFields,
      method: "post",
      withCredentials: true,
    });
  };

  return (
    <div className="bg-background shadow-2xl rounded-xl p-8 py-16 flex gap-16 flex-col items-start w-[600px] h-4/5 sm:w-4/5">
      <div className="w-full h-full">
        <div className="flex flex-col gap-4 h-full ">
          <h2 className="text-primaryText font-semibold text-4xl pb-8">
            Signup
          </h2>

          <div className="flex flex-col gap-8 h-[60%]">
            <div>
              <Label text="Username" />
              <Input
                value={userFields.username}
                onChange={(e) =>
                  setUserFields((prev) => {
                    return { ...prev, username: e.target.value };
                  })
                }
              />
              {errors?.username && (
                <p className="text-red-600">{errors.username}</p>
              )}
            </div>
            <div>
              <Label text="Password" htmlFor="password" />
              <Input
                type="password"
                value={userFields.password}
                onChange={(e) =>
                  setUserFields((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
              {errors?.password && (
                <p className="text-red-600">{errors.password}</p>
              )}
            </div>
            <div>
              <Label text="Confirm Password" htmlFor="password" />
              <Input
                type="password"
                value={userFields.confPassword}
                onChange={(e) =>
                  setUserFields((prev) => {
                    return { ...prev, confPassword: e.target.value };
                  })
                }
              />
              {errors?.confPassword && (
                <p className="text-red-600">{errors.confPassword}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Button
              type="primary"
              btnType="submit"
              size="xl"
              text="sign up"
              handleClick={submitHandler}
            />
            <Link to="/login" className="text-secondaryText text-lg">
              <span>Already have an account? </span>
              <span className="text-primaryText font-semibold font-poppins text-xl cursor-pointer">
                Log in
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
