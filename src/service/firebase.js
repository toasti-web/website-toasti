import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADPM8jxeccEQ-3p8zQwyjrooItY6aRsLM",
    authDomain: "toasti-staging.firebaseapp.com",
    projectId: "toasti-staging",
    storageBucket: "toasti-staging.appspot.com",
    messagingSenderId: "95414929457",
    appId: "1:95414929457:web:8f99fd3b4b34615c02ed10"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);

const authentication = new auth.getAuth();
export default authentication;
const provider = new auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(authentication, provider);