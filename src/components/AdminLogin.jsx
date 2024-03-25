import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from 'firebase/compat/app'; // Импорт Firebase с совместимостью
import 'firebase/compat/auth';

const AdminLogin = () => {
  const [adminLogin, setAdminLogin] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
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
      await firebase.auth().signInWithEmailAndPassword(adminLogin, adminPassword); // Вызов функции аутентификации

      // Если вход выполнен успешно, перенаправляем пользователя на страницу администратора
      navigate('/orders');
      toast.success('Вход выполнен успешно!');
    } catch (error) {
      console.error('Ошибка входа администратора:', error.message);
      toast.error('Ошибка входа ');
    }
  };

  return (
    <div className="container">
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  

  <h2 style={{  color: 'black' }}>Вход администратора</h2>
  <form onSubmit={handleAdminLogin}>
    <div className="mb-3">
      <label style={{  color: 'black' }} htmlFor="adminLogin" className="form-label">Логин:</label>
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
      <label style={{  color: 'black' }} htmlFor="adminPassword" className="form-label">Пароль:</label>
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