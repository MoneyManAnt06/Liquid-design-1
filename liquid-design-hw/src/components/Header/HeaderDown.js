import { headerData } from "@/data/header";
import { routes } from "@/data/routes";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

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
      <div className="container header__down-container">
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
              {renderOptions(headerData.options)}
            </ul>
          </nav>
        </div>
        <ul className="header__tools">
          {renderOptions(headerData.secondaryOptions)}
        </ul>
      </div>
    </div>
  );
};

export default HeaderDown;
