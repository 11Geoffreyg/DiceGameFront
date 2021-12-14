import './InputGroup.scss';
import React from 'react';

import {GameContext} from '../../App.js'

const InputGroup = ({label, type}) => {

  const Context = React.useContext(GameContext)

  console.log(Context)

  return (
    <div className="input-group">
      <label for={`input-${label}`}>{label}</label>
      <input id={`input-${label}`} type={type}></input>
      <p>{Context.diceNbs}</p>
    </div>
  );
}

export default InputGroup;