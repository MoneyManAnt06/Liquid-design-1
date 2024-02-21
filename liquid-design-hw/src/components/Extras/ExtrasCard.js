import PropTypes from "prop-types";
import Card from "../Card";

const ExtrasCard = ({ title, time, clasicPrice, elitePrice, customClass }) => {
  return (
    <Card
      title={title}
      time={time}
      clasicPrice={clasicPrice}
      elitePrice={elitePrice}
      customClass={customClass}
    />
  );
};

ExtrasCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  clasicPrice: PropTypes.string.isRequired,
  elitePrice: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
};

export default ExtrasCard;
