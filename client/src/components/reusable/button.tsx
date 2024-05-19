type ButtonProps = {
  type: "primary" | "secondary";
  btnType?: "button" | "submit" | "reset";
  styles?: string;
  size?: "base" | "xl" | "2xl";
  text?: "send" | "start chatting" | "login" | "sign up" | "skip" | "continue";

  handleClick?: () => void;
};

const buttonStyles = {
  primary: {
    button:
      "bg-primaryBtn font-poppins font-semibold capitalize text-primaryBtnText px-8 py-1 rounded-md transition-all hover:opacity-80 ",
  },
  secondary: {
    button:
      "bg-SecondaryBt capitalize h-10 text-SecondaryBtnText px-8 py-1 rounded-md transition-all hover:opacity-80 font-semibold ",
  },
};

const buttonSize = {
  base: {
    btnSize: " text-base ",
  },
  xl: {
    btnSize: " text-xl ",
  },
  "2xl": {
    btnSize: " text-2xl py-2 sm:text-xl ",
  },
};

const Button = ({
  type,
  styles,
  size = "base",
  btnType = "button",
  text = "send",
  handleClick = () => {},
}: ButtonProps) => {
  const { button } = buttonStyles[type];
  const { btnSize } = buttonSize[size];

  return (
    <button
      onClick={handleClick}
      className={button + btnSize + styles}
      type={btnType}
    >
      {text}
    </button>
  );
};
export default Button;
