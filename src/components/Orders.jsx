import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { firestore, collection, onSnapshot, deleteDoc, doc } from '../firebase';
import { ListGroup, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Orders = ({ isAuthenticated, adminLogin }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate(); // Используем useNavigate для выполнения перенаправления

  useEffect(() => {
    console.log('Initializing Firebase app...');
    // Инициализация Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyB2M3EduPlbUojiHf2yK5lLFMDan3G-nAw",
      authDomain: "santehmarket-2cace.firebaseapp.com",
      projectId: "santehmarket-2cace",
      storageBucket: "santehmarket-2cace.appspot.com",
      messagingSenderId: "826401161544",
      appId: "1:826401161544:web:29ef55e3d5ef0d6bbc737d",
      measurementId: "G-2LE6VS8QN0"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    console.log('Fetching orders from Firestore...');
    const ordersCollection = collection(firestore, 'Clients');
    const unsubscribe = onSnapshot(ordersCollection, (querySnapshot) => {
      const fetchedOrders = querySnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        phoneNumber: doc.data().phoneNumber,
        ...doc.data()
      }));
      setOrders(fetchedOrders);
      setLoading(false);
    });

    return () => {
      console.log('Unsubscribing from orders collection...');
      unsubscribe();
    };
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      console.log('Deleting order with ID:', orderId);
      await deleteDoc(doc(firestore, 'Clients', orderId));
      console.log('Order deleted successfully!');
      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error.message);
      setError('Error deleting order: ' + error.message);
    }
  };

  useEffect(() => {
    // Получаем текущего пользователя при загрузке компонента
    console.log('Checking authentication state...');
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log('Current user:', user);
    });
    return () => {
      console.log('Unsubscribing from authentication state changes...');
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!isAuthenticated) {
        navigate('/admin'); // Если пользователь не аутентифицирован, перенаправляем на страницу администратора
      }
    });
    return () => unsubscribe();
  }, [navigate, isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log('Orders:', orders);

  return (
    <div style={{ color: 'black' }}>
    <h2>Заказы</h2>
    <ListGroup>
      {orders.map(order => (
        <ListGroup.Item key={order.id}>
          <p>Имя клиента: {order.name}</p>
          <p>Номер телефона: {order.phoneNumber}</p>
          <p>Дата и время заказа: {order.createdAt ? order.createdAt.toDate().toLocaleString() : 'Не указано'}</p>

          {/* Преобразуем объект firebase.firestore.Timestamp в объект Date и отображаем в удобном формате */}
          <Button variant="danger" onClick={() => handleDeleteOrder(order.id)}>
            <FaTrash /> Удалить
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
  );
};

export default Orders;
