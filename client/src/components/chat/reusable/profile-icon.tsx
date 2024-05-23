import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';

type ProfileTypes = {
  variant?: "standard" | "small",
  className?: string,
  src?: string,
  username?: string,
}

const ProfileIcon = ({ variant, className = "", src = "", username = '' }: ProfileTypes) => {

  return <div className={cn(ProfileVariants({ variant }), className)}>
    {
      src ? <img
        src={src}
        alt="user-profile.svg"
        className="rounded-full h-full w-full object-cover select-none"
      /> :
        <div className="capitalize text-primaryText font-semibold bg-indigo-600 w-full h-full rounded-full grid place-content-center">{!src && username[0]}</div>
    }
  </div>
}

const ProfileVariants = cva(
  "w-12 h-12 rounded-full grid place-items-center select-none",
  {
    variants: {
      variant: {
        'standard': "text-3xl",
        'small': "md:w-6 md:h-6 lg:h-10 lg:w-10"
      }
    }
  }
)


export default ProfileIcon;