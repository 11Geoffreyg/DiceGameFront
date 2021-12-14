import logo from './logo.svg';
import './App.css';
import './assets/Styles/main.scss'

import TheButton from './components/TheButton/TheButton.js';
import InputGroup from './components/InputGroup/InputGroup.js';

import React from 'react'

export const GameConfig = {
  diceNbs: 0
}

export const GameContext = React.createContext();

const App = () => {
  return (
    <GameContext.Provider value={GameConfig}>
      <div className="App">
        <TheButton label="Jouer"></TheButton>
        <InputGroup label="Nombre de face" type="number"></InputGroup>
        <InputGroup label="Nombre de dés" type="number"></InputGroup>
      </div>
    </GameContext.Provider>
  );
}

export default App;
