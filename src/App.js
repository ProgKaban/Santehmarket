import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import Icons from './components/Icons';
import Delivery from './components/Delivery';
import Warm from './components/Warm';
import Form from './components/Form';


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

function App() {
  useEffect(() => {
    const initializeFirebase = async () => {
      try {
        const app = initializeApp(firebaseConfig);
        // Пример чтения данных
        const database = getDatabase(app);
        const dataRef = ref(database, 'data');
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data); // Ваши данные из базы данных
        });

        // Пример записи данных
        // push(ref(database, 'data'), { name: 'John', phoneNumber: '123-456-7890' });

        // Очистка слушателя при размонтировании компонента
        return () => {
          off(dataRef);
        };
      } catch (error) {
        console.error('Error initializing Firebase:', error);
      }
    };

    initializeFirebase();
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <Warm />
      <Icons />
      <Delivery />
      <Form/>
      <Footer />
    </div>
  );
}

export default App;
