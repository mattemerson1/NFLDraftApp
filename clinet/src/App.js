import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Users from './components/users'
import Roster from './components/roster'
import NavigationBar from './components/navigationBar'
import RosterPlayers from './components/rosterPlayers'
import Players from './components/players'
import { origin } from './config'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


function App() {
  const [rosterId, setRosterId] = useState();
  const [state, setState] = useState("users");
  


  const handlePress = (rosterId) => {
    setRosterId(rosterId)
  }

  const handleState = (state) => {
    setState(state)
  }
  

  return (
    <div className="App">
      {/* NAVIGATION BAR */}
      <NavigationBar handleState={handleState}/>
      {/* NAVIGATION BAR */}
      {state === 'users' ? <Users handlePress={handlePress} /> : null}
      {state === 'rosters' ? <Roster rosterId={rosterId} /> : null}
      {state === 'players' ? <Players /> : null}
      {/* {rosterId ? <Roster rosterId={rosterId} /> : <Users handlePress={handlePress} />} */}
      {/* {rosterId ? <RosterPlayers rosterId={rosterId} /> : null} */}
    </div>
  );
}

export default App;
