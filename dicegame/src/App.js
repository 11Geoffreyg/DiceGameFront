import logo from './logo.svg';
import './App.css';
import './assets/Styles/main.scss'

import TheButton from './components/TheButton/TheButton.js';

const App = () => {
  return (
    <div className="App">
      <TheButton label="Jouer"></TheButton>
    </div>
  );
}

export default App;
