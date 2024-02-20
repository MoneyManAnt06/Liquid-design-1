import { headerData } from "@/data/header";
import HeaderDown from "./HeaderDown";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__up">
          <p className="header__up-text">{headerData.text}</p>
        </div>
      </div>
      <HeaderDown />
    </header>
  );
};

export default Header;
