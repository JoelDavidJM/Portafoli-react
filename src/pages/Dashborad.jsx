import React from 'react';
import './style/dashborad.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DescargarCVEsp from '../../public/CurrículumEspañolCV.pdf';
import DescargarCVEng from '../../public/CurrículumVitaeCvEnglish.pdf';

const Bubbles = () => {
  const { t } = useTranslation();
  return (
    <div className="bubbles">
      {[11, 12, 24, 10, 14, 23, 48, 16, 19, 20, 22, 25, 18, 21, 15, 43, 26, 17, 13, 28].map((i) => (
        <span key={i} style={{ '--i': i }} > </span>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate(); 

  const handleHeader = () => {
    navigate('/contacto');
  };

  const { t, i18n } = useTranslation();

  const descargarCV = i18n.language === 'es' ? DescargarCVEsp : DescargarCVEng;

  return (
    <header id="home" className="header">
      <Bubbles />
      <h1 className="headerh1">
        Joel Játiva
      </h1>
      <h2 
        className="header__h2" 
        data-translate-es="Desarrollador web Full Stack"
        data-translate-en="Full Stack Web Developer"
      >
        {t('TITLECV')}
      </h2>
      <div className="div--contact">
        <div onClick={handleHeader} id="contactMeBtn" className="div__a">
          <span>{t('CONTACTME')}</span>
          <span className="material-symbols-outlined"><i className='bx bxs-phone'></i></span>
        </div>
        <a 
          className="div__a" 
          download 
          href={descargarCV}
          id="downloadCV"
        >
          {t('DOWLOAND')}
        </a>
      </div>
      <div className="morph"></div>
    </header>
  );
};

export default Dashboard;
