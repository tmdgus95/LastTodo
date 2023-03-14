import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATA_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// signInWithPopup(auth, provider)
//     .then(result => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential?.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         console.log(user);

//         // IdP data available using getAdditionalUserInfo(result)
//     })
//     .catch(error => {
//         console.log(error);
//     });

// export function login() {
//     signInWithPopup(auth, provider).catch(console.error);
// }

export function login() {
    signInWithPopup(auth, provider)
        .then(res => console.log(res))
        .catch(console.error);
}
export function login2() {
    signInWithRedirect(auth, provider);
}
