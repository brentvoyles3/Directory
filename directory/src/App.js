import './App.css';
import defImage from "./images/nba.jpg"
import Lebron from "./images/L.jpg"
import BG from "./images/BG.jpg"
import Shai from "./images/S.jpg"
import Chris from "./images/C.jpg"
import Steph from "./images/Steph.jpg"
import Tyrese from "./images/T.jpg"
import Player from './components/Player';
import React, { useEffect, useState } from 'react';
import Header from "./components/Header"


function App() {
  useEffect(() => {
    document.title = "StatScheat";  
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
      img: Tyrese
    },
    {
      id:2,
      fname: 'Chris', 
      lname: 'Paul',
      position: "Point Guard",
      img: Chris 
    },
    {
      id:3,
      fname: 'Lebron', 
      lname: 'James',
      position: "Forward",
      img: Lebron 
    },
    {
      id:4,
      fname: 'Shai', 
      lname: 'Gilgeous-Alexander',
      position: "Shooting Guard",
      img: Shai
    },
    {
      id:5,
      fname: 'Stephen', 
      lname: 'Curry',
      position: "Point Guard",
      img: Steph
    },
    {
      id:6,
      fname: 'Klay', 
      lname: 'Thompson',
      position: "Point Guard",
      img:defImage, 
    },
    {
      id:7,
      fname: 'Giannis', 
      lname: 'Antekunopo',
      position: "Forward",
      img:defImage, 
    },
    {
      id:8,
      fname: 'Andre', 
      lname: 'Drummond',
      position: "Center",
      img: defImage
    },
    {
      id:9,
      fname: 'Trae', 
      lname: 'Young',
      position: "Point Guard",
      img:  defImage
    },
    {
      id:10,
      fname: 'Paul', 
      lname: 'George',
      position: "Forward",
      img: defImage
    },
  ]);
  const showPlayers = true;

  return (
    <div className="App">
      <Header/>
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