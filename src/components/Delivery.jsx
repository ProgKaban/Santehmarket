import React from 'react';
import { FaTruck } from 'react-icons/fa'; // Импортируем иконку грузовика


const Delivery = () => {
  return (
    <div id="contacts" className="delivery-container">
      <div className="delivery-icon">
        <FaTruck size={150} color="rgb(66, 180, 255)" /> {/* Увеличили иконку и задали синий цвет */}
      </div>
      <div className="delivery-text">
        <h2>Бесплатная доставка</h2>
        <p>Сумма доставки рассчитывается индивидуально, уточняйте по телефону </p>
      </div>
    </div>
  );
}

export default Delivery;
