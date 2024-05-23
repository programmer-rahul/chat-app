import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import CustomImportMeta from '../../../utils/variables';

type ProfileTypes = {
  variant?: "standard" | "small",
  className?: string,
  src?: string,
  username?: string,
}

const ProfileIcon: React.FC<ProfileTypes> = ({ variant, className = "", src = "", username = '' }) => {

  return <div className={cn(ProfileVariants({ variant }), className)}>
    {
      src ? <img
        src={`${(import.meta as CustomImportMeta).env.VITE_API_BASE_URL}/${src}`}
        alt="user-profile.svg"
        className="rounded-full h-full w-full  object-cover"
      /> :
        <div className="capitalize text-primaryText font-semibold bg-indigo-600 w-full h-full rounded-full grid place-content-center">{!src && username[0]}</div>
    }
  </div>
}

const ProfileVariants = cva(
  "w-14 h-14 rounded-full grid place-items-center",
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