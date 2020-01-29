import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { origin } from '../../config'


const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${origin}/api/v1/users`);
                console.log(response.data.rows)
                setUsers(response.data.rows)
            } catch(err) {
                console.error(err)
            }
        }
        fetchUsers()
    }, []);
    return users.map(({ user_name }) => <h1>{user_name}</h1>)

}

export default Users