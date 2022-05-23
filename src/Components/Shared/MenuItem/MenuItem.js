import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuItem.css';
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';



const MenuItem = () => {
    return (
        <div className='nav-div'>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    < RocketLaunchSharpIcon />
                    <Link to='/'><h3>Rocket Express</h3></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Services</Nav.Link>
                            <Nav.Link href="#pricing">Track Your Order</Nav.Link>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Log In</Nav.Link>
                             
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default MenuItem;