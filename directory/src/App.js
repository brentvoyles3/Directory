import './App.css';
import defImage from "./images/nba.jpg"
import Lebron from "./images/L.jpg"
import BG from "./images/BG.jpg"
import Shai from "./images/S.jpg"
import Chris from "./images/C.jpg"
import Ant from "./images/Ant.jpg"
import Steph from "./images/Steph.jpg"
import Tyrese from "./images/T.jpg"
import Player from './components/Player';
import React, { useEffect, useState } from 'react';
import Header from "./components/Header"
import AddPlayer from "./components/AddPlayer"
import Footer from "./components/Footer"
import {v4 as uuidv4 } from 'uuid'; 


function App() {
  useEffect(() => {
    document.title = "StatScheat";  
  }, []);
  {/* log, set variables, implement logic prior to return if needed
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
      fname: 'Anthony', 
      lname: 'Edwards',
      position: "Point Guard",
      img: Ant
    },
  ]);

  function updatePlayer(id, newFName, newLName, newPosition, newImg) {
    const updatedPlayers = players.map((player) => {
      if (id == player.id) {
        //return new player
        return {...player, fname: newFName, lname: newLName, position: newPosition, img: newImg };
      }

      return player;
    });
    setPlayers(updatedPlayers)
  }

  function newPlayer(fname, lname, position, img) {
    const newPlayer = {
      id: uuidv4(),
      fname: fname,
      lname: lname,
      position: position,
      img: img,
    }
    setPlayers([...players, newPlayer])
  }

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
      key={player.id}
      id={player.id} 
      fname={player.fname}
      lname={player.lname}
      position={player.position} 
      img={player.img} 
      />
      );
            })}
    </div>
    <AddPlayer newPlayer={newPlayer} />
    </>
    <Footer/>
    </div>
)}

export default App;