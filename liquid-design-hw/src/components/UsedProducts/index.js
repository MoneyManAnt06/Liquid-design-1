import PropTypes from 'prop-types';
import ProductCards from '../ProductCards';

const UsedProducts = ({title=''}) => {
  return (
    <section className='Used-products'>
       <h3 className='Used-products-title'>{title}</h3>
       <div className='Used-products-cards'>
        <ProductCards 
              title='Lorem ipsum'
              price='25,00€'
              info='Más info'
              src='/makeup1.png'
              alt='First make up image'
        />
        <ProductCards
              title='Lorem ipsum'
              price='25,00€'
              info='Más info'
              src='/makeup2.png'
              alt='First make up image'
        />
        <ProductCards 
              title='Lorem ipsum'
              price='25,00€'
              info='Más info'
              src='/makeup3.png'
              alt='First make up image'
        />
       </div>
    </section>
  );
};

UsedProducts.propTypes = {
    title: PropTypes.string,
};

export default UsedProducts