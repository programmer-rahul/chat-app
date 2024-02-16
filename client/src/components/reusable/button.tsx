type ButtonProps = {
  type: "primary" | "secondary";
  btnType?: "button" | "submit" | "reset";
  styles?: string;
  text?: "send" | "get started" | "login" | "sign up" | "skip" | "continue";
  handleClick?: () => void;
};

const buttonStyles = {
  primary: {
    button:
      "bg-primaryBtn capitalize h-10 text-primaryBtnText px-8 py-1 rounded-md transition-all hover:opacity-80 ",
  },
  secondary: {
    button:
      "bg-SecondaryBtn capitalize h-10 text-SecondaryBtnText px-8 py-1 rounded-md transition-all hover:opacity-80 font-semibold ",
  },
};

const Button = ({
  type,
  styles,
  btnType = "button",
  text = "send",
  handleClick = () => { },
}: ButtonProps) => {
  const { button } = buttonStyles[type];

  return (
    <button onClick={handleClick} className={button + styles} type={btnType}>
      {text}
    </button>
  );
};
export default Button;
