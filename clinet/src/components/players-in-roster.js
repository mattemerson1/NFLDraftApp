import React, { useState, useEffect } from 'react';
import './players-in-roster.css';
import apiRequests from '../utils/apiRequests';

const rosterPlayers = () => {

    const [team, setTeam] = useState("");

    useEffect(() => {
        async function fetchRosterPlayers() {
            try {
                const response = await apiRequests.getRosterPlayers(2);
                console.log(response)
                // for (var i = 0; i < rows.length; i++)
                setTeam(response.data.rows.map(team => team.player_id))
                // setTeams(response.data.rows[2].team_name)
            } catch(err) {
                console.error(err)
            }
        }
    fetchRosterPlayers()
    });

    const playerPanel = team ? team.map(team => {
        return <div className="player-id"> {team} </div>
    })
    : null

    return (
        <div className="rosterPlayers">
        {teams}
        {playerPanel}
        {teamPanel}
        </div>
    );
}

export default rosterPlayers;