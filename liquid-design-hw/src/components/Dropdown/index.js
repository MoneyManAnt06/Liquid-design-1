import Link from "next/link";
import PropTypes from "prop-types";

const Dropdown = (props) => {
  const { options } = props;

  const renderOptions = () =>
    options.map((option) => (
      <li className="dropdown__item" key={option.id}>
        <Link href={option.url} className="dropdown__option">
          {option.text}
        </Link>
      </li>
    ));

  return (
    <div className="dropdown">
      <ul className="dropdown__links">{renderOptions()}</ul>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Dropdown;
