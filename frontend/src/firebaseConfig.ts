import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCBPszTV4_noTmGjzv009VNpT0oH4_2pUg",
  authDomain: "legal-plus-64781.firebaseapp.com",
  projectId: "legal-plus-64781",
  storageBucket: "legal-plus-64781.appspot.com",
  messagingSenderId: "895467007440",
  appId: "1:895467007440:web:0bb8d5eb09aba7d394ddd5",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, firebaseConfig };