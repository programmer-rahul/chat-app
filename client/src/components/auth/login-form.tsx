import { useEffect, useState } from "react";
import Input from "../ui/input";
import Label from "../reusable/label";
import { Link } from "react-router-dom";
import useAxios from "../../services/api";
import { useAuth } from "../../context/auth-context";
import { Errors, UserFields } from "../../utils/types";
import { formValidations } from "../../utils/validations";
import { setUserInLocalStorage } from "../../utils/local-storage";
import Button from "../ui/button";

const LoginForm = () => {
  const { fetchData, response } = useAxios();
  const { setIsAuth } = useAuth();

  const [userFields, setUserFields] = useState<UserFields>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (response) {
      if (response.status) {
        response.data && setUserInLocalStorage(response?.data.user);
        setIsAuth(true);
      } else {
        setErrors((prev) => {
          return { ...prev, apiError: response.message };
        });
        console.log("error in login", errors);
      }
    }
  }, [response]);

  const submitHandler = async () => {
    if (!formValidations({ userFields, setErrors }))
      return console.log("Validation Failed!");

    await fetchData({
      url: "/user/login",
      method: "post",
      data: { username: userFields.username, password: userFields.password },
      withCredentials: true,
    });
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-8 h-[60%]">
          <div className="flex flex-col">
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
              <p className="text-rose-600">{errors.username}</p>
            )}
          </div>
          <div className="flex flex-col">
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
              <p className="text-rose-600">{errors.password}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Button onClick={submitHandler}>Login</Button>

          <Link
            to="/signup"
            className="text-secondaryText sm:text-lg text-base"
          >
            <span>Don't have any account create one? </span>
            <span className="text-primaryText font-semibold font-poppins md:text-xl text-lg cursor-pointer">
              Sign up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
