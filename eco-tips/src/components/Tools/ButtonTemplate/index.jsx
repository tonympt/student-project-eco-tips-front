/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, onClick, color, children, padding, width }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${color}-button text-white text-xl ${width} ${color}-button:hover ${padding}font-bold button-active active:animate-buttonAnimation`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  padding: '',
  color: '',
  width: '',
  children: '',
};

export default Button;
