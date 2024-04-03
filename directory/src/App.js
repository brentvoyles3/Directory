import './App.css';
import Image from "./images/nba.jpg"
import Player from './components/Player';
import React, { useEffect, useState } from 'react';


function App() {
  useEffect(() => {
    document.title = "Staff Directory";  
  }, []);
  {/* Can log, set variables, implement logic prior to return  
  console.log('Starting to list... Outside the return') */}
  const [position, setPosition] = useState('Administrator');
  const [players, setPlayers] = useState([
    {
      id:1,
      fname: 'Tyrese', 
      lname: 'Halliburton',
      position: "Point Guard",
      img: Image
    },
  ]);
  const showPlayers = true;

  return (
    <div className="App bg-red-300">
      {/* Ternary before the return */}
      <>
      <input className="editBox" placeholder='Filter By Name' type="text" onChange={(e) => {
      console.log(e.target.value);
      setPosition(e.target.value);
      }}
      />         
    <h1 class="text-3xl font-bold underline"> </h1>
    <div className="flex flex-wrap justify-center">
      {players.map((player) => {
      console.log(player);
      return (
      <Player 
      fname={player.fname}
      lname={player.lname}
      position={player.position} 
      img={player.img} 
      />
      );
            })}
    </div>
    </>
    </div>
)}

export default App;