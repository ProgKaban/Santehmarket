import React, { useState, useEffect } from 'react';
import { firestore, collection, getDocs, deleteDoc, doc } from '../firebase'; // Add doc to the import statement
import { ListGroup, Button } from 'react-bootstrap'; // Import ListGroup and Button from Bootstrap
import { FaTrash } from 'react-icons/fa'; // Import the delete icon
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

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
    const fetchOrdersFromFirestore = async () => {
      try {
        console.log('Fetching orders collection from Firestore...');
        const querySnapshot = await getDocs(collection(firestore, 'Clients'));
        const fetchedOrders = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          phoneNumber: doc.data().phoneNumber,
          ...doc.data()
        }));
        console.log('Fetched orders:', fetchedOrders);
        setOrders(fetchedOrders);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error.message);
        setError('Error fetching orders: ' + error.message);
        setLoading(false);
      }
    };

    fetchOrdersFromFirestore();
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
    // Логика, которая выполняется после обновления страницы
    console.log('Page is refreshed!');
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ color: 'black' }}>
      <h2>Заказы</h2>
      <ListGroup>
        {orders.map(order => (
          <ListGroup.Item key={order.id}>
            <p>Name: {order.name}</p>
            <p>Phone Number: {order.phoneNumber}</p>
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
