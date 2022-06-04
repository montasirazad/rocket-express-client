import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import initializeAuthentication from "./initializeAuthentication"



const useFirebase = () => {

    const [signedInUser, setSignedInUser] = useState({});
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();


    initializeAuthentication()
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                setSignedInUser(user);
                const destination = location.state.from || '/';
                navigate(destination);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage)
            });
    }

    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setSignedInUser({})
            console.log(signedInUser);
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const auth = getAuth();

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setSignedInUser(user)
            } else {
                setSignedInUser({})
            }
        });
        return () => unSubscribe;
    }, [])


    return {
        signedInUser,
        error,
        handleGoogleSignIn,
        handleGoogleSignOut
    }
}

export default useFirebase;