import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAZrSimHb7xJQYS4EgOsMqvUGPGUWhGi4o",
  authDomain: "project-71-bedtimestories.firebaseapp.com",
  projectId: "project-71-bedtimestories",
  storageBucket: "project-71-bedtimestories.appspot.com",
  messagingSenderId: "163173614474",
  appId: "1:163173614474:web:8376ddcc93121606bbfe73"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
