import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Welcome from './components/Welcome';





function App() {
  return (
    <div>



      <Header/>
      <Banner/>
      <Welcome/>
      <Footer/>
     
      
    </div>
  );
}

export default App;
