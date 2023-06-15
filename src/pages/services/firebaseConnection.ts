import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbWf-tdW7dKO6Wg7-WtZ4eZWIg6oA3Ido",
  authDomain: "tarefasnext-a044d.firebaseapp.com",
  projectId: "tarefasnext-a044d",
  storageBucket: "tarefasnext-a044d.appspot.com",
  messagingSenderId: "246491241434",
  appId: "1:246491241434:web:db707b0d7b77c42104bee3",
  measurementId: "G-9N430PKMHH"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };