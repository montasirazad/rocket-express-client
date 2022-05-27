import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuItem.css';
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';
import useAuth from '../../Hooks/Hook/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';

const MenuItem = () => {
    const { signedInUser, handleGoogleSignOut } = useAuth();

    return (
        <div className='nav-div'>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" fixed="top" >
                <Container>
                    < RocketLaunchSharpIcon />
                    <Link to='/'><h3>Rocket Express</h3></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/services'>Services</Link>
                            <Link to='/dashboard'>  Dashboard</Link>
                            <Link to='/track-order'><ShareLocationIcon /> Track Your Parcel</Link>
                            {
                                signedInUser.displayName && <p style={{
                                    marginRight: '10px',
                                    marginLeft: '10px',
                                    color: 'white'
                                }}>

                                    Welcome, {signedInUser.displayName}</p>
                            }
                            {

                                signedInUser.email ?
                                    <Button onClick={handleGoogleSignOut} variant='contained' size='small'>
                                        <LogoutIcon />Log Out</Button> :
                                    <Link to='/login'> < LoginIcon /> Log In</Link>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default MenuItem;