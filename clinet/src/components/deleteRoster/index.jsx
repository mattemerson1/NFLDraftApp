import React, { useState } from 'react';
import axios from 'axios';
import { origin } from '../../config'
import Dropdown from 'react-bootstrap/Dropdown'


const RemoveRoster = () => {
    const [rosters, setRosters] = useState([]);

    const DeleteRoster = async (rosterId) => {
        try{
            await axios.delete(`${origin}/api/v1/rosters/${rosterId}`);
        } catch(err) {
            console.log(err)
        }
    }

    const GetRosters = async () => {
        try{
            const response = await axios.get(`${origin}/api/v1/rosters`);
            setRosters(response.data.rows)
        } catch(err) {
            console.log(err)
        }
    }
    GetRosters();

    const handleDelete = async (roster_id) => {
        console.log(roster_id)
        await DeleteRoster(roster_id);
    }   

    return (
    <div>
    <h1>Delete Roster</h1>
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Rosters
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {rosters.map(({ team_name, roster_id }) =><Dropdown.Item onClick={() => handleDelete(roster_id)}>{team_name}</Dropdown.Item>)}
        </Dropdown.Menu>
    </Dropdown>
    </div>
    )
}

export default RemoveRoster