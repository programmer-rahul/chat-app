import SignUpForm from "../components/auth/signup-form.tsx";

const SignUpPage = () => {
  return (
    <div className="Signup w-full h-screen">
      <div className="bg-secondaryMessage flex items-center justify-center h-full">
        <div className="container bg-background shadow-2xl rounded-xl p-8 py-16 flex gap-16 flex-col items-start  w-[600px] h-4/5">
          <h2 className="text-primaryText font-semibold text-3xl">Signup</h2>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
