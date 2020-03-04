import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { origin } from '../../config'


const  RosterPlayers = ({rosterId}) => {
    const [rosterPlayers, setRosterPlayers] = useState([]);

    useEffect(() => {
        const fetchRosterPlayers = async () => {
            try {
                const response = await axios.get(`${origin}/api/v1/rosters/${rosterId}/players`);
                setRosterPlayers(response.data.rows)
            } catch(err) {
                console.log(err)
            }
        }
        fetchRosterPlayers()
    }, []);
    return rosterPlayers.map(({ roster_id, player_id }) => <h1>{roster_id} {player_id} </h1>)
}

export default RosterPlayers

// Dont think this component is being used at all