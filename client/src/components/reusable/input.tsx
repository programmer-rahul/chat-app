import { ChangeEvent } from "react";

type InputProps = {
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
}: InputProps) => {
  return (
    <input
      type={type}
      name={type}
      value={value}
      onChange={onChange}
      className="py-2 px-0 w-full border-b-2 border-primaryBtn/70 text-primaryText bg-transparent outline-none"
      placeholder={placeholder}
    />
  );
};
export default Input;
