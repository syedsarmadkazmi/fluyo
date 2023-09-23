// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCFFEp-2fglWYT1KWs3RqV71QA16G-tC_o",
	authDomain: "fluyo-24e0e.firebaseapp.com",
	projectId: "fluyo-24e0e",
	storageBucket: "fluyo-24e0e.appspot.com",
	messagingSenderId: "603697180660",
	appId: "1:603697180660:web:cf6afcf3e795590a11d3a1",
	measurementId: "G-KGVJT58JZX"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)


// Initialize Cloud Firestore and get a reference to the service
export const firebaseDB = getFirestore(app)

export const collectionName = "language_quiz"