type ProfileTypes = {
  isPrimary?: boolean,
  styles?: string,
  src?: string,
  username?: string,
}

const ProfileIcon: React.FC<ProfileTypes> = ({ isPrimary = true, styles = "", src = "", username = '' }) => {
  // primary for big and non-primary for small

  const imageCss = isPrimary
    ? "w-14 h-14 rounded-full grid place-items-center text-3xl"
    : "w-14 h-14 md:w-6 md:h-6 lg:h-10 lg:w-10 rounded-full grid place-items-center";

  return <div className={`${imageCss} ${styles}`}>
    {
      src ? <img
        src={`http://localhost:5000/${src}`}
        alt="user-profile.svg"
        className="rounded-full h-full w-full  object-cover"
      /> :
        <div className="capitalize text-primaryText font-semibold bg-indigo-600 w-full h-full rounded-full grid place-content-center">{!src && username[0]}</div>
    }
  </div>
}

export default ProfileIcon;