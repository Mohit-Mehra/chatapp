import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAJaLrslbarewCK7lu-7I1DIYYYtnaaw-M",
  authDomain: "chat-d61d9.firebaseapp.com",
  projectId: "chat-d61d9",
  storageBucket: "chat-d61d9.appspot.com",
  messagingSenderId: "680070760664",
  appId: "1:680070760664:web:ecfc1adba5a2423fefefad"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();