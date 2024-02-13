const ProfileIcon = ({ isPrimary = false }: { isPrimary?: boolean }) => {
  let imageCss;

  isPrimary
    ? (imageCss =
        "w-14 h-14 rounded-full border-border border grid place-items-center")
    : (imageCss =
        "w-14 h-14 md:w-6 md:h-6 lg:h-10 lg:w-10 rounded-full border-border border grid place-items-center");

  return (
    <div className={imageCss}>
      <img
        src="profile2.png"
        alt="user-profile.svg"
        className="rounded-full h-full w-full  object-cover"
      />
    </div>
  );
};
export default ProfileIcon;
