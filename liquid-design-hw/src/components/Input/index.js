'use client';
import PropTypes from 'prop-types';


const Input = ({placeholder='', type='', onChange=()=>{}, customClass=''}) => {
  return (
    <input className={customClass} type={type} placeholder={placeholder} onChange={onChange}></input>
  )
}

Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password"]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    customClass: PropTypes.string,
};

export default Input