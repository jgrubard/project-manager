import React from 'react';

const Button = ({ onClick, label, active, long }) => {
  return (
    <button
      className={`login-toggle${ active ? ' active' : ''}${ long ? ' long' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;