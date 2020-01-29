import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import ClickyButtonState from './clicky-button-state'
import ClickyButtonProps from './clicky-button-props'
import { origin } from './config'


function App() {
  const [teams, setTeams] = useState("");
  const [users, setUsers] = useState("");
  const [buttonClicks, setButtonClicks] = useState(0);
  


  useEffect(() => {
    async function fetchRosters() {
      try {
        const response = await axios.get(`${origin}/api/v1/rosters`);
        console.log(response, "rosters")
        setTeams(response.data.rows[0].team_name)
      } catch(err) {
        console.error(err) 
      }
    }
    async function fetchUsers() {
      try {
        const response = await axios.get(`${origin}/api/v1/users`);
        console.log(response, "users")        
        setUsers(response.data.rows[0].user_name)
      } catch(err) {
        console.error(err)
      }
    }
    fetchUsers()
    fetchRosters()
  });

  const teamPanel = teams ?
  (<div className="team-names">
    {teams}
    </div>)
    : null

  const userPanel = users ?
  (<div className="user-names">
    {users}
    </div>)
    : null

  return (
    <div className="App">
        {users}
        {teams}
        {teamPanel}
        {userPanel}
        <ClickyButtonState />
        <ClickyButtonProps setButtonClicks={setButtonClicks} buttonClicks={buttonClicks} />
        {buttonClicks}
    </div>
  );
}

export default App;
