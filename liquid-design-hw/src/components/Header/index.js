import { headerData } from "@/data/header";
import { routes } from "@/data/routes";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Header = () => {


    const renderOptions


  return (
    <header className="header">
      <div className="container header-container">
        <Link href={routes.home}>
          <figure className="header__logo">
            <Image
              src={headerData.logo}
              height="auto"
              width="auto:"
              alt="peluqueria logo"
            />
          </figure>
        </Link>

        <label className="header-hamburger" htmlFor="menuCheck">
          <FontAwesomeIcon icon={faBars} />
        </label>

        <input
          type="checkbox"
          name="menuCheck"
          id="menuCheck"
          className="header__check d-none"
        />

        <div className="header__row">
          <nav className="header__menu">
            <ul className="header__links">
              <li className="header__items">
                <Link className="header__link"></Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
