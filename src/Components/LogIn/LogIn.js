import React from 'react';
import useAuth from '../Hooks/Hook/useAuth';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import './LogIn.css'
import MenuItem from '../Shared/MenuItem/MenuItem';

const LogIn = () => {
    const { signedInUser, handleGoogleSignIn, handleGoogleSignOut } = useAuth();
    return (
        <>
            <MenuItem />
            <div className='logIn-div'>
                {
                    signedInUser.email ? <h3>Click log out button to log out</h3> :
                        <h3>Please log in using g-mail to Continue</h3>
                }


                {
                    signedInUser.email ? <Button onClick={handleGoogleSignOut} variant="contained">log Out</Button> :
                        <Button onClick={handleGoogleSignIn} variant="contained"><GoogleIcon className='g-icon' />Click here to Continue </Button>
                }

                <br />


                <p> &#169; {new Date().getFullYear()} Rocket express.</p>
            </div>
        </>

    );
};

export default LogIn;