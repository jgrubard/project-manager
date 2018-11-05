import React from 'react';

const Button = ({ onClick, label, active }) => {
  return (
    <button
      className={`login-toggle${ active ? ' active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;