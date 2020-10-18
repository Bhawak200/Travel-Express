import firebase from 'firebase/app'
import 'firebase/firestore'

const db= firebase
.initializeApp(
    {
    apiKey: "AIzaSyBCXQIo3oy1ZOiepLLg9cT9yBwZD8tsgY0",
    authDomain: "travel-express-4861b.firebaseapp.com",
    databaseURL: "https://travel-express-4861b.firebaseio.com",
    projectId: "travel-express-4861b",
    storageBucket: "travel-express-4861b.appspot.com",
    messagingSenderId: "594189596961",
    appId: "1:594189596961:web:def0a0a6bd08cbd2ae6660",
    measurementId: "G-KC23QCC41B"
    }
)
.firestore()

export default db

