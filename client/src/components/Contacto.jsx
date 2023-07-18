import React, { useState } from 'react';

export default function Contacto() {
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
      const response = await fetch('https://porfolio-service-email.onrender.com/contact', {
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
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobileNumber"
              required
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Subject"
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
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn" disabled={isSending}>
            {isSending ? 'Enviando...' : 'Send Message'}
          </button>
          {isSuccess && <p>El correo electrónico se envió con éxito.</p>}
        </form>
      </section>
    </>
  );
}
