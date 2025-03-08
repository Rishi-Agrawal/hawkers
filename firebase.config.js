import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDP2zdpAg7GAv9-WxMOty7sQOXJDB5_vuw",
  authDomain: "hawkers-5d995.firebaseapp.com",
  projectId: "hawkers-5d995",
  storageBucket: "hawkers-5d995.appspot.com",
  messagingSenderId: "1095866343215",
  appId: "1:1095866343215:web:4e1f9faf702e6852ac0bda",
  measurementId: "G-4MS2TB3BF7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
