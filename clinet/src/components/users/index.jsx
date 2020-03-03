import React, { useState, useEffect } from 'react';
import { DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import { origin } from '../../config'
import DropdownItem from 'react-bootstrap/DropdownItem';



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
    
    return <DropdownButton id="dropdown-basic-button" title="Users">
        {users.map(({ user_name, roster_id }) => <DropdownItem onClick={() => handlePress(roster_id)}>{user_name}</DropdownItem>)}
        <DropdownItem href="#/action-2"> Create User</DropdownItem>


    </DropdownButton>

}

export default Users