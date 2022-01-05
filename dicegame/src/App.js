import './App.css';
import './assets/Styles/main.scss'

import { Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home.js'
import Game from './views/Game/Game.js'



import React from 'react'

export const GameConfig = {
  diceNbs: 0,
  nbDiceSide: 0
}

export const GameContext = React.createContext();

const App = () => {
  return (
    <GameContext.Provider value={GameConfig}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </GameContext.Provider>
  );
}

export default App;
