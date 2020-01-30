import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { origin } from '../../config'

const Roster = ({rosterId}) => {
    const [roster, setRoster] = useState([]);

    useEffect(() => {
        const fetchRoster = async () => {
            try {
                const response = await axios.get(`${origin}/api/v1/rosters/${rosterId}`);
                setRoster(response.data.rows)
            } catch(err) {
                console.log(err)
            }
        }
        fetchRoster()
    }, []);

    return roster.map(({team_name}) => <button>{team_name}</button> )
}

export default Roster