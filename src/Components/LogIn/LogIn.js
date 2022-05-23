import React from 'react';
import useAuth from '../Hooks/Hook/useAuth';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';

const LogIn = () => {
    const { handleGoogleSignIn, handleGoogleSignOut } = useAuth();
    return (
        <div>
             <Button onClick={handleGoogleSignIn} variant="contained" disableElevation><GoogleIcon />Please Continue using g-mail</Button>
            
            <button onClick={handleGoogleSignOut}>log Out</button>
        </div>
    );
};

export default LogIn;