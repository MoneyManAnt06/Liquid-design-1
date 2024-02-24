import Image from 'next/image';
import PropTypes from 'prop-types';
import Button from '../Button';

const ProductCards = ({title='', price='', info='', src='', alt=''}) => {
  return (
    <div className='Product-card-container'>
        <Image className='Product-card-image' src={src} alt={alt} height={200} width={200}></Image>
        <div className='Product-card-content'>
            <p className='Product-card-title'>{title}</p>
            <span className='Product-card-price'>{price}</span>
            <Button
                customClass='Product-card-button'
                text={info}
            />
        </div>
    </div>
  )
}

ProductCards.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    info: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default ProductCards