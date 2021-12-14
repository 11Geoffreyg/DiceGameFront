import React, { useEffect, useState } from 'react';


import './Dice.scss';

var classNames = require('classnames');

const Dice = ({diceList}) => {

  console.log({diceList});

  return (
    <div className='dice_list'>
      {diceList.map((i) => (
        <div key={i} className={classNames("dice", i.status == true ? 'winner' : '')}>
          <p>{i.number}</p>
        </div>
      ))}
    </div>
  );
};

export default Dice;