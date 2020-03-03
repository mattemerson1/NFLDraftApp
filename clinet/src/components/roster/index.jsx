import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { origin } from '../../config'

const Roster = ({rosterId}) => {
    
    const [roster, setRoster] = useState({});
    const [rosterPlayers, setRosterPlayers] = useState([]);

    useEffect(() => {
        const fetchRoster = async () => {
            try {
                const response = await axios.get(`${origin}/api/v1/rosters/${rosterId}`);
                setRoster(response.data.rows[0])
            } catch(err) {
                console.log(err)
            }
        }

        const fetchRosterPlayers = async () => {
            try {
                const response = await axios.get(`${origin}/api/v1/rosters/${rosterId}/players`);
                setRosterPlayers(response.data.rows)
            } catch(err) {
                console.log(err)
            }
        }
        fetchRoster()
        fetchRosterPlayers()
    }, [rosterId]);

    return [
        <h1> {roster.team_name} </h1>,
        rosterPlayers.map(({ player_id }) => <h1> {player_id} </h1>)
    ];
}

export default Roster