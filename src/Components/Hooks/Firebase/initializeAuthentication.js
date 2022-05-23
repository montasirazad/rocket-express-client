import firebaseConfig from "./firebaseConfig";
import { initializeApp } from 'firebase/app';


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;