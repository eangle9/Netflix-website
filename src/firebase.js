import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBQt29WNuNvs8S4wUTQS4SB7-B4qLjIuhQ",
  authDomain: "netflix-clone-29a31.firebaseapp.com",
  projectId: "netflix-clone-29a31",
  storageBucket: "netflix-clone-29a31.appspot.com",
  messagingSenderId: "316617493284",
  appId: "1:316617493284:web:a8feda00cee394946b81b1"
};

const app = initializeApp(firebaseConfig);
/* const db = firebaseApp.fireStore();
const auth = firebase.auth(); */

export const auth = getAuth(app);
export default app;

