import PropTypes from 'prop-types';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterFollowers = ({title=''}) => {
  return (
    <div>
       <h3 className='Footer-titles'>{title}</h3>
       <div>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
       </div>
    </div>
  );
};

FooterFollowers.propTypes = {
    title: PropTypes.string,
  };

export default FooterFollowers;