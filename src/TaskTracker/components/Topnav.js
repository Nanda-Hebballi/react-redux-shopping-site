import React from 'react'
import { Navbar } from 'react-bootstrap';

function Topnav() {
    return (
        <>
         <Navbar bg="light">
            <Navbar.Brand href="#home" className="mx-4 pt-3 px-3">Shopping Site</Navbar.Brand>
        </Navbar>
        </>
    )
}

export default Topnav
