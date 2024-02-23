import Image from 'next/image';
import PropTypes from 'prop-types';
import ShopLogo from "@/assets/images/shoplogo.png"

const CopyRight = ({text='', text2='', }) => {
  return (
    <div className='CopyRight'>
        <span>{text}</span>
        <div>
            {text2}
            <Image src={ShopLogo} alt='Shop Logo' width='auto' height='auto' />
        </div>
    </div>
  )
}

CopyRight.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array
  };


export default CopyRight