import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import ClickyButtonState from './clicky-button-state'
import ClickyButtonProps from './clicky-button-props'
import Users from './components/users'
import Roster from './components/roster'
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
  

  return (
    <div className="App">
      {/* NAVIGATION BAR */}
      <Button onClick={() => setState("users")}>users</Button>
      <Button onClick={() => setState("rosters")}>rosters</Button>
      <Button onClick={() => setState("players")}>players</Button>
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
