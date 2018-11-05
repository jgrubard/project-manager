import React from 'react';

const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      className='input-field'
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;