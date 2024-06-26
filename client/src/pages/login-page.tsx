import LoginForm from "../components/auth/login-form";

const LoginPage = () => {
  return (
    <div className="login w-full h-screen">
      <div className="bg-secondaryBackground flex items-center justify-center h-full">
        <div className="bg-background shadow-2xl rounded-xl p-8 py-16 flex gap-16 flex-col items-start sm:w-[600px] h-4/5 w-4/5">
          <h2 className="text-primaryText font-semibold text-3xl">Login</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
