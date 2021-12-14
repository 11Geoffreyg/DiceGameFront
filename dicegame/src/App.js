import logo from './logo.svg';
import './App.css';
import './assets/Styles/main.scss'

import TheButton from './components/TheButton/TheButton.js';
import InputGroup from './components/InputGroup/InputGroup.js';

import React from 'react'
import Dice from './components/Dice/Dice';

export const GameConfig = {
  diceNbs: 0
}

export const GameContext = React.createContext();

const App = () => {

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
    <GameContext.Provider value={GameConfig}>
      <div className="App">
        <TheButton label="Jouer"></TheButton>
        <InputGroup label="Nombre de face" type="number"></InputGroup>
        <InputGroup label="Nombre de dés" type="number"></InputGroup>
        <Dice diceList={dice_list} />
      </div>
    </GameContext.Provider>
  );
}

export default App;
