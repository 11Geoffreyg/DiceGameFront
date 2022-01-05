import './InputGroup.scss';
import React from 'react';

const InputGroup = ({label, type}) => {
  return (
    <div className="input-group">
      <label for={`input-${label}`}>{label}</label>
      <input id={`input-${label}`} type={type}></input>
    </div>
  );
}

export default InputGroup;