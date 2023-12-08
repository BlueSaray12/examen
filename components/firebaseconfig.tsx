// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 export const firebaseConfig = {
  apiKey: "AIzaSyAbA49KpXczi6CrTFQsNbUbTzLBS7p7OcU",
  authDomain: "examen-c70c0.firebaseapp.com",
  databaseURL: "https://examen-c70c0-default-rtdb.firebaseio.com",
  projectId: "examen-c70c0",
  storageBucket: "examen-c70c0.appspot.com",
  messagingSenderId: "358033303686",
  appId: "1:358033303686:web:a02ab0b8a09852c4d28907"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export default firebaseConfig;