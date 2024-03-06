import React from 'react';

export default function Banner() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '90vh' }}>
      <img
        src="https://sotni.ru/wp-content/uploads/2023/08/santekhnika-17.webp"
        alt="Баннер"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h1>Позвоните нашему специалисту и мы подберем товар</h1>
        <p></p>
       
        <div class="wrap">
          <button class="button">Заказать звонок</button>
        </div>
      </div>
    </div>
  );
}
