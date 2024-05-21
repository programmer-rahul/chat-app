import { useState } from "react";
import SignUpForm from "../components/auth/signup-form.tsx";
import SelectProfleImage from "../components/auth/select-profile-image.tsx";

const SignUpPage = () => {
  const [isSignUpFormCompleted, setIsSignUpFormCompleted] = useState(false);

  return (
    <div className="Signup w-full h-screen">
      <div className="bg-secondaryBackground flex items-center justify-center h-full">
        {!isSignUpFormCompleted ? (
          <SignUpForm setCompleted={setIsSignUpFormCompleted} />
        ) : (
          <SelectProfleImage />
        )}
      </div>
    </div>
  );
};
export default SignUpPage;
