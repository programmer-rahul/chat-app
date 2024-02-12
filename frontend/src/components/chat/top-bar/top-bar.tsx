import AppLogo from "./app-logo";
import SearchInput from "./search-input";
import Settings_Profile from "./settings-profile";

const TopBar = () => {
  return (
    <div className="flex h-full">
      <div className="flex items-center justify-between border-b w-full text-primaryText">
        <AppLogo />
        <SearchInput />
        <Settings_Profile />
      </div>
    </div>
  );
};

export default TopBar;
