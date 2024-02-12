const Settings_Profile = () => {
  return (
    <div className="right-corner flex gap-4 items-center">
      <div className="setting w-10 h-10 rounded-full border border-border place-items-center hidden sm:grid">
        {/* TODO : Setting icon  */}
        <h1>S</h1>
      </div>
      <div className="profile w-10 h-10 rounded-full grid place-items-center">
        <img
          src="profile.png"
          alt="profile.svg"
          className="rounded-full h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export default Settings_Profile;
