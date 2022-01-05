import React from 'react';
import ClassNames from 'classnames'


import './Dice.scss';
const Dice = ({diceList}) => {

  console.log({diceList});

  return (
    <div className='dice_list'>
      {diceList.map((i) => (
        <div key={i} className={ClassNames("dice", i.status === true ? 'winner' : '')}>
          <p>{i.number}</p>
        </div>
      ))}
    </div>
  );
};

export default Dice;