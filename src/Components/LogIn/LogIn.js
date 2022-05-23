import React from 'react';
import useAuth from '../Hooks/Hook/useAuth';

const LogIn = () => {
    const { handleGoogleSignIn,handleGoogleSignOut } = useAuth();
    return (
        <div>
            <button onClick={handleGoogleSignIn}>log in</button>
            <button onClick={handleGoogleSignOut}>log Out</button>
        </div>
    );
};

export default LogIn;