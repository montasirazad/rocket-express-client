import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuItem.css';
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import LoginIcon from '@mui/icons-material/Login';


const MenuItem = () => {
    return (
        <div className='nav-div'>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" fixed="top" >
                <Container>
                    < RocketLaunchSharpIcon />
                    <Link to='/'><h3>Rocket Express</h3></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">



                        </Nav>
                        <Nav>
                            <Link to='/services'>Services</Link>
                            <Link to='/track-order'><ShareLocationIcon /> Track Your Parcel</Link>
                            <Link to='/login'> < LoginIcon /> Log In</Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default MenuItem;