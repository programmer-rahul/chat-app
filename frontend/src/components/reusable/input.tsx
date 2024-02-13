import { ChangeEvent } from "react";

type InputProps = {
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = "text",
  placeholder = "Type here",
  value = "",
  onChange = () => {},
}: InputProps) => {
  return (
    <input
      type={type}
      name={type}
      value={value}
      onChange={onChange}
      className=" bg-primaryBtn text-primaryText outline-none rounded-md p-2 w-full"
      placeholder={placeholder}
    />
  );
};
export default Input;
