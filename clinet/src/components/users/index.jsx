import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { origin } from '../../config'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button'



const Users = ({handlePress}) => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${origin}/api/v1/users`);
                setUsers(response.data.rows)
                console.log(response.data.rows)
            } catch(err) {
                console.error(err)
            }
        }
        fetchUsers()
    }, []);
    
    return  <ButtonToolbar>
                {users.map(({ user_name, roster_id }) => <Button onClick={() => handlePress(roster_id)} size="lg" variant="primary">{user_name}</Button>)}
        </ButtonToolbar> 
}

export default Users