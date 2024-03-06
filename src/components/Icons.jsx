import React from 'react';
import '../Icons.css'; // Подключаем ваши стили

const Icons = () => {
  return (
    <section className="hero-section">
      <div className="card-grid">
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://avatars.mds.yandex.net/i?id=82e314cce3bdb1c7168d61ffc83be172b1ae52f1-10918661-images-thumbs&n=13)"}}></div>
          <div className="card__content">
          
            <h3 className="card__heading">Смесители</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://avatars.mds.yandex.net/i?id=eb85cbeaf5f521c3bbec1ec6b51787c925077f17-10948701-images-thumbs&n=13"}}></div>
          <div className="card__content">
         
            <h3 className="card__heading">Ванны</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://avatars.mds.yandex.net/i?id=27fb748259826fb4ae0b62ce0a348617e503ee3c-10576886-images-thumbs&n=13"}}></div>
          <div className="card__content">
            
            <h3 className="card__heading">Душевые кабины</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://avatars.mds.yandex.net/i?id=3ca869a4fe81b1ff9df6efc43431f4f5e01fd7df-9599239-images-thumbs&n=13"}}></div>
          <div className="card__content">
       
            <h3 className="card__heading">Мебель</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://avatars.mds.yandex.net/i?id=6671deae2073d2aaea54ca897a1c243a-5524638-images-thumbs&n=13"}}></div>
          <div className="card__content">
       
            <h3 className="card__heading">Санфаяс</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://avatars.mds.yandex.net/i?id=22beb8d8cc2de612fc9f225d142ce8b48c78bd94-10199799-images-thumbs&n=13"}}></div>
          <div className="card__content">
       
            <h3 className="card__heading">Акссесуары</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://vanna-store.ru/image/cache/catalog/products/18/68/18684104373a667ecbc102af691895e4-700x700.jpg"}}></div>
          <div className="card__content">
       
            <h3 className="card__heading">Душевые системы</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: "url(https://www.cleangoods.ru/upload/iblock/407/rkc13mog2ap43g2bnxyh5qgkdtbmb94t.jpg"}}></div>
          <div className="card__content">
       
            <h3 className="card__heading">Душевые углы</h3>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Icons;