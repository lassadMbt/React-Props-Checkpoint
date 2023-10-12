import React from 'react';
import './App.css';
import PlayersList from './components/PlayersList'; // Import the PlayersList component

function App() {
  const styleObject = { color:"red"}
  return (
    <div className="App">
      <h1  style={styleObject}>Football Players</h1>
      <PlayersList /> {/* Render the PlayersList component here */}
    </div>
  );
}





export default App;