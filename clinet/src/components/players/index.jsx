import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() =>{
        const fetchPlayers = async () => {
            try {
                const response = await axios.get(`https://fantasyfootballcalculator.com/api/v1/adp/standard?year=2019&team=NO`);
                setPlayers(response.data.rows)
            } catch(err) {
                console.error(err)
            }
        }
        fetchPlayers()
    }, []);

    return <div>
            <ButtonToolbar>
                <Button variant="primary" size="lg">
                 Players
                </Button>    
            </ButtonToolbar>
    <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ADP</th>
                    <th>name</th>
                    <th>team</th>
                    <th>position</th>
                    <th>player id</th>
                </tr>
            </thead>
    
    
    </Table>
    </div>        

}

export default Players