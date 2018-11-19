import React from 'react';

const Button = ({ onClick, label, active, long, disabled }) => {
  return (
    <button
      className={`button${ active ? '' : ' button-inactive'}${ long ? ' button-long' : ''}`}
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      {label}
    </button>
  );
}

export default Button;