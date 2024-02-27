import React from 'react'
import { useEffect } from 'react';



export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    script.src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad075c0a08737f9b4e9e296a3aa62f7f6caab8cffc9311f1a10a18c0231d1da43&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true";

    const mapContainer = document.querySelector(".map-container");
    mapContainer.appendChild(script);

    return () => {
      mapContainer.removeChild(script);
    };
  }, []);

  return (
    <footer id="contacts" className="footer-container">
      <div className="organization-info">
        <h3>Сантехмаркет</h3>
        <p>Контактный номер телефона: +7 914-144-32-45</p>
        <p>Почта: santehmarket@bk.ru</p>
        <p>Оставайтесь лучшими вместе с нами!</p>
      </div>
      <div className="map-container">
        
      </div>
    </footer>
  );
}