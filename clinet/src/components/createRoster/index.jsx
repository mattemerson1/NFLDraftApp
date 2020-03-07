import React from 'react';
import axios from 'axios';
import { origin } from '../../config'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
    <Form>
        <input type="text" onChange={handleChange} placeholder="Enter Roster name.."/>
        <Button type="submit" value="Submit" onTouchStart={handleSubmit} onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
    )
}

export default CreateRoster