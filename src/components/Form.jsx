import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const Form = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dataProcessingAgreement, setDataProcessingAgreement] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDataProcessingAgreementChange = () => {
    setDataProcessingAgreement(!dataProcessingAgreement);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dataProcessingAgreement) {
      // Получаем экземпляр Firestore
      const db = getFirestore();

      try {
        // Добавляем данные в коллекцию Firestore
        const docRef = await addDoc(collection(db, 'Clients'), {
          name,
          phoneNumber,
        });

        console.log('Документ записан с ID: ', docRef.id);

        // Очистка формы после отправки
        setName('');
        setPhoneNumber('');
        setDataProcessingAgreement(false);

        // Показываем уведомление
        setShowSuccessAlert(true);

        // Скрытие уведомления через 5 секунд
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 5000);
      } catch (error) {
        console.error('Ошибка при добавлении документа: ', error);
      }
    } else {
      alert('Пожалуйста, согласитесь с обработкой ваших персональных данных перед отправкой.');
    }
  };

  return (
    <div className="formb">
      <div className="max-width-form">
        <h2>Обратная свзяь</h2>
        <form onSubmit={handleSubmit} className="custom-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Имя:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Номер телефона:</label>
            <InputMask
              mask="+7 (999) 999-99-99"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={dataProcessingAgreement}
              onChange={handleDataProcessingAgreementChange}
              required
            />
            <label className="form-check-label">
              Я согласен на обработку моих персональных данных.
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>

        {/* Уведомление об успешной отправке */}
        {showSuccessAlert && (
          <div className="alert alert-success mt-3" role="alert">
            Данные успешно отправлены!
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
