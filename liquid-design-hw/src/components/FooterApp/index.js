import Image from 'next/image';
import PropTypes from 'prop-types';

const FooterApp = ({title='', src1='', src2='', alt1='', alt2=''}) => {
  return (
    <div className='Footer-app'>
        <h3 className='Footer-app-title'>{title}</h3>
        <div className='Footer-app-image-container'>
          <Image className='Footer-app-image' src={src1} alt={alt1} width={197} height={64} />
          <Image className='Footer-app-image' src={src2} alt={alt2} width={197} height={64} />
        </div>
    </div>
   
  );
};

FooterApp.propTypes = {
    title: PropTypes.string,
    src1: PropTypes.string,
    src2: PropTypes.string,
    alt1: PropTypes.string,
    alt2: PropTypes.string,
};

export default FooterApp 