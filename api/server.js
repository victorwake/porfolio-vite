const express = require('express');
const server = express();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const cors = require('cors');

server.use(cors());
require('dotenv').config();


server.use(express.json());
server.use(morgan('dev'));

const userMail = process.env.USER_HOTMAIL;
const password = process.env.PASS_HOTMAIL;
const from = process.env.FROM;
const to = process.env.TO;

// Configurar ruta para recibir los datos del formulario
server.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const mobileNumber = req.body.mobileNumber;
  const subject = req.body.subject;
  const message = req.body.message;

  // Configurar el transporte para enviar correos electrónicos con Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: userMail,
      pass: password,
    },
  });
  

  const mailOptions = {
    from: from,
    to: to,
    subject: 'Nuevo mensaje del porfolio',
    text: `
      Nombre: ${name}
      Email: ${email}
      Número de teléfono: ${mobileNumber}
      Asunto: ${subject}
      Mensaje: ${message}
    `,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el formulario');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send('Formulario enviado con éxito');
    }
  });
});

module.exports = server;
