import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'


const navigationBar = ({handleState}) => {


    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Corn on the Randall Cobb</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link onClick={() => handleState("users")}>Users</Nav.Link>
            <Nav.Link onClick={() => handleState("rosters")}>Rosters</Nav.Link>
            <Nav.Link onClick={() => handleState("players")}>Players</Nav.Link>
            <Nav.Link onClick={() => handleState("createRoster")} > Create roster </Nav.Link>
            <Nav.Link onClick={() => handleState("removeRoster")} > Delete roster </Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>

}


export default navigationBar