import { ButtonHTMLAttributes } from "react"
import { cva } from 'class-variance-authority';
import { cn } from "../../utils/cn";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "disabled"
    className?: string
}

const Button = ({ variant, className, ...props }: ButtonPropsType) => {
    return (
        <button {...props} className={cn(buttonVariants({ variant }), className, "")} />
    )
}

const buttonVariants = cva(
    'bg-primaryBtn font-poppins bg-red-500 font-semibold capitalize text-primaryBtnText px-6 py-1 rounded-md transition-all'
    ,
    {
        variants: {
            variant: {
                primary: "bg-sky-700 text-slate-200 border border-transparent hover:opacity-70",
                secondary: "bg-transparent text-sky-700 border border-slate-200 hover:border-sky-700",
                disabled: "bg-gray-500 cursor-not-allowed"
            }
        }
        ,
        defaultVariants: {
            variant: "primary"
        }
    }



)



export default Button