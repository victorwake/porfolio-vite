import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contacto() {
  const [t, i18n] = useTranslation('global');//Traduccion
  const [showModal, setShowModal] = useState(false);
  const urlBackend = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const response = await fetch(urlBackend, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
      body: JSON.stringify(formData)
});


      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          mobileNumber: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }

    setIsSending(false);
  };

  return (
    <>
      <section className="contacto" id="contacto">
        <h2 className="heading">{t('contact')}<span>{t('me')}</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder={t('name')}
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder={t('email')}
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder={t('mobileNumber')}
              name="mobileNumber"
              required
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder={t('subject')}
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder={t('yourMessage')}
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn" disabled={isSending}>
            {isSending ? t('sending') : t('send')}
          </button>
          {isSuccess && <p className="alert-success">{t('alert-success')}</p>}
        </form>
      </section>
    </>
  );
}


