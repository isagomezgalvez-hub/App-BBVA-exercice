// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
	apiKey: "AIzaSyBeHSdRCPGcpU1laAcOFVjY8MOnoEzLcdw",
	authDomain: "backend-54380.firebaseapp.com",
	projectId: "backend-54380",
	storageBucket: "backend-54380.appspot.com",
	messagingSenderId: "617798198754",
	appId: "1:617798198754:web:f452b67f553f83c62885bb"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export{
	db,
	firebase
}