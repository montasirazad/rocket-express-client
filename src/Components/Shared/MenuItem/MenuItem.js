import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuItem.css';



const MenuItem = () => {
    return (
        <div className='nav-div'>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <RocketLaunchOutlinedIcon />
                    <Link to='/'><h5>Rocket Express</h5></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default MenuItem;