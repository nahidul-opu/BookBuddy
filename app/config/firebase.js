import firebase from "firebase/compat/app";
import {} from "firebase/compat/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAsYzUmKOAHq4KobHIOy1ic5BnQQ8WtWu4",
  authDomain: "bookbuddy-7c920.firebaseapp.com",
  databaseURL:
    "https://bookbuddy-7c920-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "bookbuddy-7c920",
  storageBucket: "bookbuddy-7c920.appspot.com",
  appId: "1:259071966199:android:f402af5316629ec4de8cf2",
};
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
