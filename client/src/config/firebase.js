import { initializeApp } from "firebase/app";
import { getAuth }from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW0AswPsvOPeUBuOZMPh2BOczVJa6POoQ",
  authDomain: "supercoffee-ffafc.firebaseapp.com",
  projectId: "supercoffee-ffafc",
  storageBucket: "supercoffee-ffafc.appspot.com",
  messagingSenderId: "745984032955",
  appId: "1:745984032955:web:26483e077a10ccbe60699e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);