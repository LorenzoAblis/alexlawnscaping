import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDsU2GSr5G7gi_R6XLoCnol6GEy-ImoJQM",
  authDomain: "mpgreenteens.firebaseapp.com",
  databaseURL: "https://mpgreenteens-default-rtdb.firebaseio.com",
  projectId: "mpgreenteens",
  storageBucket: "mpgreenteens.appspot.com",
  messagingSenderId: "614308423101",
  appId: "1:614308423101:web:456850e84f6ad9f6551ed4",
  measurementId: "G-JJNK6EGFJN",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
