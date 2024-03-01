import React, { useState } from 'react';
import { FaBars, FaTimes, FaInstagram, FaVk } from 'react-icons/fa';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-container">
    <div className='logo'>
      <a href="#" ><h2>САНТЕХМАРКЕТ</h2></a>
    </div>
    <div className="nav">
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={isOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#about" >О нас</a>
        <a href="#contacts">Контакты</a>
        <a href="#products">Товары</a>
        <a href="#shop">Магазин</a>
        <a href="#shop">Доставка</a>
      </div>
    </div>

 <div className="social-icons">
  <a href="#" className="social-icon" style={{ marginTop: '15px' }}><h3>+79141443245</h3></a>
  <a href="#" className="social-icon"><FaInstagram /></a>
  <a href="#" className="social-icon"><FaVk /></a>
</div>
  </div>
  );
}