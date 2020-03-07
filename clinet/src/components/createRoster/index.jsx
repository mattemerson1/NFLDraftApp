import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { origin } from '../../config'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


// const PostRoster = async (rosterName) => {

//     try {
//         await axios.post(`${origin}/api/v1/rosters`, rosterName);  
//     } catch(err) {
//         console.log(err)
//     }
// }

const CreateRoster = () => {
    let query = ''

    const PostRoster = async (rosterName) => {
        try{
            await axios.post(`${origin}/api/v1/rosters`, rosterName);
        } catch(err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await PostRoster(query);
    }

    const handleChange = (e) => {
        query = {"team_name": (e.target.value)}
    }    

    return (
    <div>
    <h1>Roster Name</h1>
    <form>
        <input type="text" onChange={handleChange} placeholder="Enter Roster name.."/>
        <Button type="submit" value="Submit" onTouchStart={handleSubmit} onClick={handleSubmit}>SUBMIT</Button>
      </form>
    </div>
    )
}

export default CreateRoster