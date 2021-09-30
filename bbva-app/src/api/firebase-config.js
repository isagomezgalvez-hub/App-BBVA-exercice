import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBeHSdRCPGcpU1laAcOFVjY8MOnoEzLcdw",
	authDomain: "backend-54380.firebaseapp.com",
	projectId: "backend-54380",
	storageBucket: "backend-54380.appspot.com",
	messagingSenderId: "617798198754",
	appId: "1:617798198754:web:f452b67f553f83c62885bb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
	db,
	googleAuthProvider,
	firebase
}