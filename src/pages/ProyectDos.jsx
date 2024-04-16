import React from 'react'
import './style/proyectDos.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProyectDos = () => {

    const navigate = useNavigate()

    const handelReset = () => {
      navigate('/tecnologias')
    }

    const { t } =  useTranslation()
  

  return (
    <div className="technologies" id="technologies">
    <div className='technologies__container__title'>
      <h2 className="technologies__section__h2" >{t("TECHNOLOGY")}</h2>
      <button className='technologies__btn' onClick={handelReset}>{t('PREV')}</button>
    </div>
     
    <section className="section-technoligi">
    <div className='technologies__prob'>
      <div className='technologies__prob1'>
        <span className="tech-card__front">GitHub</span>
        <span className='lorem'>{t("GITHUB")}</span>
      </div>
<div className="section__div-div">
      <ul className="section__ul-container">
        <li className="section__div-ul logo9"></li>
        <li className="bottom_part"></li>
      </ul>
    </div>
    </div>
    <div className='technologies__prob'>
    <div className='technologies__prob1'>
        <span className="tech-card__front">Angular</span>
        <span className='lorem'>{t("ANGULAR")}</span>
      </div>
      <div className="section__div-div">
      <ul className="section__ul-container">
        <li className="section__div-ul logo7"></li>
        <li className="bottom_part"></li>
      </ul>
      </div>
    </div>
    <div className='technologies__prob'>
    <div className='technologies__prob1'>
        <span className="tech-card__front">Typescript </span>
        <span className='lorem'>{t("TYPESCRIPT")}</span>
      </div>
<div className="section__div-div">
      <ul className="section__ul-container">
        <li className="section__div-ul logo8"></li>
        <li className="bottom_part"></li>
      </ul>
      </div>
    </div>
      
  </section>
  </div>
  )
}

export default ProyectDos