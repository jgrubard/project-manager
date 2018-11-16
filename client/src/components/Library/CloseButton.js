import React from 'react';

const CloseButton = ({ onClick, label, active }) => {
  return (
    <button
      className='login-toggle active square'
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default CloseButton;