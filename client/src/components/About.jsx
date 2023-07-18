import perfil from '../img/perfil.fw.png'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './about_pop_up.css'

export default function About() {
    const [t, i18n] = useTranslation('global');//Traduccion
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    return (
        <>
            <section className="about" id="about">
                <div className="about-img">
                <img src={perfil } alt="" />
                </div>
                <div className="about-content">
                    <h2 className="heading">{t('About-me.0')} <span>{t('About-me.1')}</span></h2>
                    <h3>{t('About-me.2')}</h3>
                    <p>{t("home-p")}</p>
                <button  className="btn" onClick={handleOpenModal} >{t('btn-about')}</button>
                
                </div>
                
            </section>
            {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Título del pop-up</h2>
              <button className="close-btn" onClick={handleCloseModal}>
                X
              </button>
            </div>
            <div className="modal-content">
              <p>Contenido detallado del pop-up.Contenido detallado del pop-up.
              Contenido detallado del pop-up.
              Contenido detallado del pop-up.
              Contenido detallado del pop-up.Contenido detallado del pop-up.
              Contenido detallado del pop-up.
              Contenido detallado del pop-up.Contenido detallado del pop-up.
              </p>
            </div>
          </div>
        </div>
      )}
        </>
    )
}