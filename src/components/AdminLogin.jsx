import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from 'firebase/compat/app'; // Импорт Firebase с совместимостью
import 'firebase/compat/auth';

const AdminLogin = ({ setUser }) => {
  const [adminLogin, setAdminLogin] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Инициализация приложения Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyB2M3EduPlbUojiHf2yK5lLFMDan3G-nAw",
      authDomain: "santehmarket-2cace.firebaseapp.com",
      projectId: "santehmarket-2cace",
      storageBucket: "santehmarket-2cace.appspot.com",
      messagingSenderId: "826401161544",
      appId: "1:826401161544:web:29ef55e3d5ef0d6bbc737d",
      measurementId: "G-2LE6VS8QN0"
    });
  }

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(adminLogin, adminPassword)
        .then(userCredential => {
          const user = userCredential.user;
          setIsAuthenticated(true);
          setUser(user); // Устанавливаем пользователя в состояние
          navigate('/orders');
        })
        .catch(error => {
          console.error('Error signing in:', error);
          toast.error('Ошибка входа: ' + error.message);
        });
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('Ошибка входа: ' + error.message);
    }
  };

  useEffect(() => {
    console.log('adminLogin:', adminLogin);
    console.log('adminPassword:', adminPassword);
  }, [adminLogin, adminPassword]);

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className="container">
      <h2 style={{ color: 'black' }}>Вход администратора</h2>
      <form onSubmit={handleAdminLogin}>
        <div className="mb-3">
          <label htmlFor="adminLogin" className="form-label">Логин:</label>
          <input
            type="text"
            className="form-control"
            id="adminLogin"
            name="adminLogin"
            value={adminLogin}
            onChange={(e) => setAdminLogin(e.target.value)}
            placeholder="Логин администратора.."
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="adminPassword" className="form-label">Пароль:</label>
          <input
            type="password"
            className="form-control"
            id="adminPassword"
            name="adminPassword"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Пароль администратора.."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', color: 'white' }}>Войти</button>
      </form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AdminLogin;
