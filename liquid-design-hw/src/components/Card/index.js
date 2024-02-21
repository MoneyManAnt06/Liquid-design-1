import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import PropTypes from "prop-types";
import { CiStopwatch } from "react-icons/ci";

const Card = ({
  image = "",
  altImage = "",
  title,
  time,
  description,
  clasicPrice,
  elitePrice,
}) => {
  return (
    <article className="card">
      {image.length > 0 && (
        <Image
          className="card__image"
          src={image}
          width="auto"
          height="auto"
          alt={altImage}
        />
      )}

      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <span className="card__time">
          <FontAwesomeIcon className="card__time-icon" icon={CiStopwatch} />
          {time}
        </span>
        <p className="card__description">{description}</p>
        <span className="card__info">Más info</span>
      </div>
      <div className="card__footer">
        <div className="card__footer-item">
          <span>Clasic</span>
          <span>{clasicPrice}</span>
        </div>
        <div className="card__footer-item">
          <span>Élite</span>
          <span>{elitePrice}</span>
        </div>
      </div>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  altImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  clasicPrice: PropTypes.string.isRequired,
  elitePrice: PropTypes.string.isRequired,
};

export default Card;
