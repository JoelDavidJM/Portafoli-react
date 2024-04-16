import React from 'react'
import './style/analytics.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Analytics = () => {

  const navigate = useNavigate()

  const handelProyect = () => {
    navigate('/tecnologiasDos')
  }

  const { t } = useTranslation()

  return (
    <div className="technologies" id="technologies">
      <div className='technologies__container__title'>
        <h2 className="technologies__section__h2" >{t("TECHNOLOGY")}</h2>
        <button className='technologies__btn' onClick={handelProyect}>{t("SEEMORE")}</button>
      </div>
       
      <section className="section-technoligi">
      <div className='technologies__prob'>
        <div className='technologies__prob1'>
          <span className="tech-card__front">HTML</span>
          <span className='lorem'>{t("HTML")}</span>
        </div>
<div className="section__div-div">
        <ul className="section__ul-container">
          <li className="section__div-ul logo1"></li>
          <li className="bottom_part"></li>
        </ul>
      </div>
      </div>
      <div className='technologies__prob'>
      <div className='technologies__prob1'>
          <span className="tech-card__front">JavaScript</span>
          <span className='lorem'>{t("JS")}</span>
        </div>
        <div className="section__div-div">
        <ul className="section__ul-container">
          <li className="section__div-ul logo2"></li>
          <li className="bottom_part"></li>
        </ul>
        </div>
      </div>
      <div className='technologies__prob'>
      <div className='technologies__prob1'>
          <span className="tech-card__front">CSS</span>
          <span className='lorem'>{t("CSS")}</span>
        </div>
<div className="section__div-div">
        <ul className="section__ul-container">
          <li className="section__div-ul logo3"></li>
          <li className="bottom_part"></li>
        </ul>
        </div>
      </div>
        
        <div className='technologies__prob'>
        <div className='technologies__prob1'>
          <span className="tech-card__front">Git</span>
          <span className='lorem'>{t("GIT")}</span>
        </div>
           <div className="section__div-div">
        <ul className="section__ul-container">
          <li className="section__div-ul logo4"></li>
          <li className="bottom_part"></li>
        </ul>
        </div>
        </div>
       <div className='technologies__prob'>
       <div className='technologies__prob1'>
          <span className="tech-card__front">React</span>
          <span className='lorem'>{t("REACT")}</span>
        </div>
        <div className="section__div-div">
        <ul className="section__ul-container">
          <li className="section__div-ul logo5"></li>
          <li className="bottom_part"></li>
        </ul>
        </div>
       </div>
        <div className='technologies__prob'>
        <div className='technologies__prob1'>
          <span className="tech-card__front">Node.js</span>
          <span className='lorem'>{t("NODE.JS")}</span>
        </div>
          <div className="section__div-div">
        <ul className="section__ul-container">
          <li className="section__div-ul logo6"></li>
          <li className="bottom_part"></li>
        </ul>
      </div>
        </div>
        

    </section>
    </div>
  )
}

export default Analytics