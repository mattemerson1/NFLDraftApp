import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { origin } from '../../config';


const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() =>{
        const fetchPlayers = async () => {
            try {
                const response = await axios.get(`${origin}/api/v1/players`);
                console.log(response.data.body.players)
                console.log("hello")
                setPlayers(response.data.body.players)
            } catch(err) {
                console.error(err)
            }
        }
        fetchPlayers()
    }, []);

    return <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ADP</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Player id</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(({ adp, name, team, position, player_id }) => <tr> 
                        <td>{adp}</td>
                        <td>{name}</td>
                        <td>{team}</td>
                        <td>{position}</td>
                        <td>{player_id}</td>
                    </tr>)}
                </tbody>

            </Table>
           

}

export default Players

// {players.map(({ name }) => <td>{name}</td>)}  