import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import Banner from './components/Banner';
import Warm from './components/Warm';
import Icons from './components/Icons';
import Delivery from './components/Delivery';
import Form from './components/Form'; 
import Orders from './components/Orders';
import firebase from 'firebase/compat/app'; // добавлен импорт firebase
import 'firebase/compat/auth';

// Конфигурационные данные Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2M3EduPlbUojiHf2yK5lLFMDan3G-nAw",
  authDomain: "santehmarket-2cace.firebaseapp.com",
  projectId: "santehmarket-2cace",
  storageBucket: "santehmarket-2cace.appspot.com",
  messagingSenderId: "826401161544",
  appId: "1:826401161544:web:29ef55e3d5ef0d6bbc737d",
  measurementId: "G-2LE6VS8QN0"
};
const app = initializeApp(firebaseConfig); // Инициализация Firebase приложения

function App() {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const [adminLogin, setAdminLogin] = useState(''); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initializeFirebase = async () => {
        try {
            // Инициализация Firebase приложения
            const app = initializeApp(firebaseConfig);

            // Пример чтения данных из Realtime Database
            const database = getDatabase(app);
            const dataRef = ref(database, 'data');
            onValue(dataRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data); // Ваши данные из Realtime Database
            });

            // Пример чтения категорий из Firestore
            const db = getFirestore(app);
            const categoriesCollection = collection(db, 'categories');
            const categoriesSnapshot = await getDocs(categoriesCollection);

            const categoriesData = categoriesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setCategories(categoriesData);

            // Добавление обработчика onAuthStateChanged
            const unsubscribe = firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
                setUser(user);
            });

            return () => {
                off(dataRef);
                unsubscribe(); // Отписываемся от обработчика при размонтировании компонента
            };
        } catch (error) {
            console.error('Error initializing Firebase:', error);
        }
    };

    initializeFirebase();

}, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Banner />
                <Warm />
                <Icons />
                <Delivery />
                <Form />
                <Footer />
              </div>
            }
          />
          <Route
            path="/admin"
            element={<AdminLogin setUser={setUser} />} 
          />
          <Route
            path="/orders"
            element={<Orders isAuthenticated={isAuthenticated} adminLogin={adminLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
