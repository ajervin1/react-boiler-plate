import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBeILLlgURITAuhIGy6RaO3LvcHgikrzMA",
	authDomain: "gyfcat-8b799.firebaseapp.com",
	projectId: "gyfcat-8b799",
	storageBucket: "gyfcat-8b799.appspot.com",
	messagingSenderId: "1010558526087",
	appId: "1:1010558526087:web:c6a1579cdc91fa6270ce22"
};

const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();




export { db, auth, firebase };