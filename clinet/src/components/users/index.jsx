import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { origin } from '../../config'


const Users = ({handlePress}) => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${origin}/api/v1/users`);
                setUsers(response.data.rows)
            } catch(err) {
                console.error(err)
            }
        }
        fetchUsers()
    }, []);
    return users.map(({ user_name, roster_id }) => <button  onClick={() => handlePress(roster_id)} >{user_name}</button>)

}

export default Users