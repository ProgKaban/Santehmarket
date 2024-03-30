import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, deleteDoc, onSnapshot } from 'firebase/firestore'; // Импортируем функцию 'doc'

// Замените на свои конфигурационные данные Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB2M3EduPlbUojiHf2yK5lLFMDan3G-nAw",
    authDomain: "santehmarket-2cace.firebaseapp.com",
    projectId: "santehmarket-2cace",
    storageBucket: "santehmarket-2cace.appspot.com",
    messagingSenderId: "826401161544",
    appId: "1:826401161544:web:29ef55e3d5ef0d6bbc737d",
    measurementId: "G-2LE6VS8QN0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore, collection, getDocs, doc, deleteDoc, onSnapshot }; // Экспортируем необходимые функции
