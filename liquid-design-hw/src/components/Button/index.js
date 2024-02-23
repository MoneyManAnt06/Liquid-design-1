import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { customClass = '', text = '', onClick= () => {}, children = <></>, href = '' } = props;
    return (
        <Link href={href} className={customClass} >
            {text}
            {children}
        </Link>
    );
};

Button.propTypes = {
    customClass: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    href: PropTypes.string,
};
  
  export default Button;
