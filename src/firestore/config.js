import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDRHlg5E7O5aOjY7cAfq1CvtNCxrlc7eXg",
    authDomain: "project-management-23d9b.firebaseapp.com",
    projectId: "project-management-23d9b",
    storageBucket: "project-management-23d9b.appspot.com",
    messagingSenderId: "506004454524",
    appId: "1:506004454524:web:b50c344787dc7aef7b9df9"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}