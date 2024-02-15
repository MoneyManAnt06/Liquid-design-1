import { headerData } from "@/data/header";
import { routes } from "@/data/routes";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import HeaderDown from "./HeaderDown";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__up">
          <p className="header__up-text">{headerData.text}</p>
        </div>
      </div>
      <HeaderDown />
    </header>
  );
};

export default Header;
