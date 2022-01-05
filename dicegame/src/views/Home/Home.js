import TheButton from '../../components/TheButton/TheButton.js';
import InputGroup from '../../components/InputGroup/InputGroup.js';
import Dice from '../../components/Dice/Dice.js';

import {GameContext} from '../../App.js'
import React from 'react';


const Home = () => {

  const Context = React.useContext(GameContext)

  const dice_list = [
    {
      number: 1,
      status: true,
    },
    {
      number: 2,
      status: false,
    },
    {
      number: 3,
      status: false,
    },
    {
      number: 3,
      status: false,
    },
    {
      number: 5,
      status: true,
    },
    {
      number: 6,
      status: false,
    },

  ]

  return (
    <div>
      <TheButton label="Jouer"></TheButton>
      <InputGroup label="Nombre de face" type="number"></InputGroup>
      <InputGroup label="Nombre de dés" type="number"></InputGroup>
      <Dice diceList={dice_list} />
      <p>{Context.diceNbs}</p>
      <div className="Home">test</div>
    </div>
  )
}

export default Home;