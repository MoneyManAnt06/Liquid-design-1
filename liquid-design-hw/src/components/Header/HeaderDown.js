import { headerData } from "@/data/header";
import { routes } from "@/data/routes";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../Dropdown";

const HeaderDown = () => {
  const renderOptions = (options) =>
    options.map((option) => (
      <li key={option.id} className="header__items">
        <Link className="header__link" href={option.url}>
          {option?.text}

          {option?.image && (
            <Image
              className="header__items-image"
              src={option.image}
              alt={option.alt}
              width="auto"
              height="auto"
            />
          )}
        </Link>
      </li>
    ));

  return (
    <div className="header__down">
      <div className="container header__container position-lg-relative">
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

        <input
          type="checkbox"
          name="menuCheck"
          id="menuCheck"
          className="header__check d-none"
        />

        <div className="header__row">
          <nav className="header__menu d-flex">
            <ul className="header__links">
              <li className="header__items header__dropdown">
                {headerData.dropdown.text}
                <Dropdown options={headerData.dropdown.options} />
              </li>
              {renderOptions(headerData.options)}
            </ul>
            <ul className="header__tools">
              {renderOptions(headerData.secondaryOptions)}
            </ul>
          </nav>
        </div>

        <div className="header__menu-left d-flex">
          <button className="header__button">
            <Image
              className="header__items-image"
              src={headerData.button.image}
              alt={headerData.button.alt}
              width="auto"
              height="auto"
            />
          </button>
          <label className="header__hamburger" htmlFor="menuCheck">
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeaderDown;
