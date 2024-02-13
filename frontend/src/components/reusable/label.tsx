type LabelProps = {
  text: string;
  htmlFor?: "text" | "email" | "password";
  styles?: string;
};

const Label = ({ text, styles = "", htmlFor = "text" }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`text-primaryText text-xl ${styles}`}>
      {text}
    </label>
  );
};
export default Label;
