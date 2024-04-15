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
      fname: 'Tyrese', 
      lname: 'Halliburton',
      position: "Point Guard",
      img: Tyrese
    },
    {
      id:7,
      fname: 'Chris', 
      lname: 'Paul',
      position: "Point Guard",
      img: Chris 
    },
    {
      id:8,
      fname: 'Lebron', 
      lname: 'James',
      position: "Forward",
      img: Lebron 
    },
    {
      id:9,
      fname: 'Shai', 
      lname: 'Gilgeous-Alexander',
      position: "Shooting Guard",
      img: Shai
    },
    {
      id:10,
      fname: 'Stephen', 
      lname: 'Curry',
      position: "Point Guard",
      img: Steph
    },
    {
      id:11,
      fname: 'Tyrese', 
      lname: 'Halliburton',
      position: "Point Guard",
      img: Tyrese
    },
    {
      id:12,
      fname: 'Chris', 
      lname: 'Paul',
      position: "Point Guard",
      img: Chris 
    },
    {
      id:13,
      fname: 'Lebron', 
      lname: 'James',
      position: "Forward",
      img: Lebron 
    },
    {
      id:14,
      fname: 'Shai', 
      lname: 'Gilgeous-Alexander',
      position: "Shooting Guard",
      img: Shai
    },
    {
      id:15,
      fname: 'Stephen', 
      lname: 'Curry',
      position: "Point Guard",
      img: Steph
    },
    {
      id:16,
      fname: 'Tyrese', 
      lname: 'Halliburton',
      position: "Point Guard",
      img: Tyrese
    },
    {
      id:17,
      fname: 'Chris', 
      lname: 'Paul',
      position: "Point Guard",
      img: Chris 
    },
    {
      id:18,
      fname: 'Lebron', 
      lname: 'James',
      position: "Forward",
      img: Lebron 
    },
    {
      id:19,
      fname: 'Shai', 
      lname: 'Gilgeous-Alexander',
      position: "Shooting Guard",
      img: Shai
    },
    {
      id:20,
      fname: 'Stephen', 
      lname: 'Curry',
      position: "Point Guard",
      img: Steph
    },
    {
      id:21,
      fname: 'Tyrese', 
      lname: 'Halliburton',
      position: "Point Guard",
      img: Tyrese
    },
    {
      id:22,
      fname: 'Chris', 
      lname: 'Paul',
      position: "Point Guard",
      img: Chris 
    },
    {
      id:23,
      fname: 'Lebron', 
      lname: 'James',
      position: "Forward",
      img: Lebron 
    },
    {
      id:24,
      fname: 'Shai', 
      lname: 'Gilgeous-Alexander',
      position: "Shooting Guard",
      img: Shai
    },
    {
      id:25,
      fname: 'Stephen', 
      lname: 'Curry',
      position: "Point Guard",
      img: Steph
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