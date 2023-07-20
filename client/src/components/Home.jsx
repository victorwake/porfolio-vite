import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; //Sirve para el texto que se escribe solo
import perfil from '../img/perfil.fw.png'

import { useTranslation } from 'react-i18next';


export default function Home() {
  const textRef = useRef(null);
  const [t, i18n] = useTranslation('global');//Traduccion

  useEffect(() => {
    const options = {
      strings: [t('multi-texto.0'), t('multi-texto.1'), t('multi-texto.2')],// El texto que se escribe solo
      typeSpeed: 100, // tiempo que tarda en escribir cada letra
      backSpeed: 50, // tiempo que tarda en borrar cada letra
      backDelay: 1000, // tiempo que tarda en borrar todo el texto
      loop: true // para que se repita
    };

    const typed = new Typed(textRef.current, options); // se le pasa el texto y las opciones

    return () => {
      typed.destroy(); // para que no se repita
    };
  }, [i18n.language]);
  
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3 id="hola">{t('hello')}</h3>
          <h1>Victor Pinto</h1>
          <div className="multi-texto">
            <h3 className="soy">{t('soy')}</h3>
            <h3>
              <span ref={textRef} className="multiple-texto"></span>
            </h3>
          </div>
          <p className="home-p">
          {t('home-p')}
          </p>
          <div className="social-media">
            <a
              href="https://www.facebook.com/Victorpintowake"
              target="_blank"
              rel="noreferrer"
              style={{ "--i": 6 }}
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/victor-pinto-fullstack/"
              target="_blank"
              rel="noreferrer"
              style={{ "--i": 7 }}
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/victorwake"
              target="_blank"
              rel="noreferrer"
              style={{ "--i": 8 }}
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/victorwake/"
              target="_blank"
              rel="noreferrer"
              style={{ "--i": 9 }}
            >
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </div>
          <a
            href="https://github.com/victorwake/porfolio/raw/main/client/src/image/CV-VictorPinto-2023.pdf"
            className="btn"
          >
            {t('download')}
          </a>
        </div>
        <div className="home-img">
          <img src={perfil} alt="" className="home-img" />
        </div>
      </section>
    </>
  );
}
