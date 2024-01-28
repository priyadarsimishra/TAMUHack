import { initializeApp } from 'firebase/app';
// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1zmb6woZ6nQI3eTYELzNX_cALZglxK-w",
    authDomain: "wealthwise-861fa.firebaseapp.com",
    projectId: "wealthwise-861fa",
    storageBucket: "wealthwise-861fa.appspot.com",
    messagingSenderId: "1027535638359",
    appId: "1:1027535638359:web:6ed9450e44e3e04d1f3812",
    measurementId: "G-GJM86MP0F7"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
