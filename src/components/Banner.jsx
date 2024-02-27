import React from 'react';

export default function Banner() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '90vh' }}>
      <img
        src="https://kartinkis.cdnbro.com/posts/57146396-fony-s-santekhnikoi-52.jpg"
        alt="Баннер"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h2>Ваш заголовок</h2>
        <p>Ваш текст здесь</p>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'transparent', color: 'white', border: '2px solid white', cursor: 'pointer' }}>Ваша кнопка</button>
      </div>
    </div>
  );
}
