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
      {altImage.length > 0 && (
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
        <div className="card__time">
          <CiStopwatch className="card__time-icon" />
          <span>{time} minutos</span>
        </div>
        <p className="card__description">{description}</p>
        <span className="card__info">Más info</span>
      </div>
      <div className="card__footer">
        <div className="card__footer-item">
          <span className="card__footer-text">Clasic</span>
          <span className="card__footer-price">{clasicPrice}</span>
        </div>
        <div className="card__footer-item">
          <span className="card__footer-text">Élite</span>
          <span className="card__footer-price">{elitePrice}</span>
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
