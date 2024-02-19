import AppLogo from "./app-logo";
import SearchInput from "./search-input";
import SettingsProfile from "./settings-profile";

const Header = () => {
  return (
    <div className="flex h-full">
      <div className="flex items-center justify-between border-b w-full text-primaryText">
        <AppLogo />
        <SearchInput />
        <SettingsProfile />
      </div>
    </div>
  );
};

export default Header;
