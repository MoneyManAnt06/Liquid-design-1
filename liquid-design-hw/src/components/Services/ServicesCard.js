import Card from "../Card";

const ServicesCard = ({
  image,
  altImage,
  title,
  time,
  description,
  clasicPrice,
  elitePrice,
}) => {
  return (
    <Card
      image={image}
      title={title}
      time={time}
      description={description}
      clasicPrice={clasicPrice}
      elitePrice={elitePrice}
      altImage={altImage}
    />
  );
};

ServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  clasicPrice: PropTypes.string.isRequired,
  elitePrice: PropTypes.string.isRequired,
};

export default ServicesCard;
