import perfil from '../img/perfil.fw.png';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './about_pop_up.css';

export default function About() {
  const [t, i18n] = useTranslation('global');
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('education'); // Agregamos el estado para la pestaña activa

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img src={perfil} alt="" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            {t('About-me.0')} <span>{t('About-me.1')}</span>
          </h2>
          <h3>{t('About-me.2')}</h3>
          <p>{t('home-p')}</p>
          <button className="btn" onClick={handleOpenModal}>
            {t('btn-about')}
          </button>
        </div>
      </section>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2></h2>
              <button className="close-btn" onClick={handleCloseModal}>
                X
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-body">

                {/* Agregamos las pestañas */}
                <div className="tabs">
                  <button
                    className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
                    onClick={() => handleTabChange('education')}
                  >
                    {t('education')}
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                    onClick={() => handleTabChange('experience')}
                  >
                    {t('experience')}
                  </button>
                </div>
                {/* Contenido de la pestaña activa */}
                
                {activeTab === 'education' && (
                  <div className="tab-content">
                    <h2 className="modal-title">{t('education')}</h2>
                    <div className="modal-card">
                      <p>
                        <span className="span-about">{t('university.0')} </span>
                        {t('university.1')}
                      </p>
                    </div>
                    <div className="modal-card">
                      <p>
                        <span className="span-about">Soy Henry: </span>
                        {t('soyHenry')}
                      </p>
                    </div>
                    <div className="modal-card">
                      <p>
                        <span className="span-about">Egg: </span>
                        {t('egg')}
                      </p>
                    </div>
                    <div className="modal-card">
                      <p>
                        <span className="span-about">Centro de e-Learning UTN FRBA: </span>
                        professional webmaster · {t('utn')}
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === 'experience' && (
                  <div className="tab-content">
                    <h2 className="modal-title">{t('experience')}</h2>
                    <div className="modal-card">
                      <p>
                        <span className="span-about">Egg: </span>
                        {t('about-experience.0')}
                      </p>
                    </div>
                    <div className="modal-card">
                      <p>
                        <span className="span-about">Soy Henry: </span>
                        {t('about-experience.1')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
