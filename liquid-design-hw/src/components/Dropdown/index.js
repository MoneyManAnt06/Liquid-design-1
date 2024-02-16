import Link from "next/link";
import PropTypes from "prop-types";

const Dropdown = (props) => {
  const { options } = props;

  const renderOptions = () =>
    options.map((option) => (
      <li key={option.id}>
        <Link href={option.url} className="dropdown__option">
          {option.text}
        </Link>
      </li>
    ));

  return <ul className="dropdown">{renderOptions()}</ul>;
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Dropdown;
