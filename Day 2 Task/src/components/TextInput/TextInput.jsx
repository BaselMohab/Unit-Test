import React from "react";

const TextInput = ({ value, onChange, placeholder, disabled }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextInput;
