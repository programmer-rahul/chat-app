import { cva } from 'class-variance-authority';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type InputTypesProps = InputHTMLAttributes<HTMLInputElement> & {
    variant?: "standard" | "outlined";
    className?: string;

}

const Input = ({ variant, className, ...props }: InputTypesProps) => {
    return <input {...props} className={cn(inputVariants({ variant }), className, "")} />
}

const inputVariants = cva(
    "bg-transparent outline-none text-slate-200 px-2 py-1 rounded-md",
    {
        variants: {
            variant: {
                standard: "border-2 border-gray-500 focus:border-sky-700",
                outlined: "border-b-2 border-gray-500 focus:border-sky-700 rounded-sm"
            }
        }
        , defaultVariants: {
            variant: "standard",
        }
    }
)

export default Input;