import React from 'react';

const Button = ({ onClick, label, active, long }) => {
  return (
    <button
      className={`button${ active ? '' : ' button-inactive'}${ long ? ' button-long' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;