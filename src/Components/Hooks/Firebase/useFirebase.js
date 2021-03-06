import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import initializeAuthentication from "./initializeAuthentication";




const useFirebase = () => {

    const [signedInUser, setSignedInUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
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
                saveUser(user.email, user.displayName);
                const destination = location.state.from || '/';
                navigate(destination);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage)
            });
    }

    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setSignedInUser({})
            
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

    useEffect(() => {
        fetch(`https://peaceful-oasis-21276.herokuapp.com/users/${signedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
                console.log(data);
            })
    }, [signedInUser.email])

    // SAVE USER INFO TO DB
    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://peaceful-oasis-21276.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        signedInUser,
        admin,
        error,
        handleGoogleSignIn,
        handleGoogleSignOut
    }
}

export default useFirebase;