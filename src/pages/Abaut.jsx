import React from 'react'
import './style/abaut.css'
import { useTranslation } from 'react-i18next'

const Abaut = () => {

  const {t} = useTranslation()

  return (
    <div className="aboutMe_div" id="aboutMe">
      <section id="aboutMe" className="section">
      <h2 className="section__h2" >{t("ABAUTME")}</h2>
      <p className="section__p-1">
      {t("DESCRIPTION")}
      </p>

      <h3 className="section__h3" >{t('UNIQUE')}</h3>
      <ul className="section__ul">
        <li className="section__li">
          <strong>{t("TITLE1")}</strong>
          <span >
          {t("TITLE1 DESCRIPTION")}
          </span>
        </li>
        <li className="section__li">
          <strong >{t("TITLE2")}</strong>
          <span >
          {t("TITLE2 DESCRIPTION")}
          </span>
        </li>
        <li className="section__li">
          <strong >{t("TITLE3")}</strong>
          <span>
          {t("TITLE3 DESCRIPTION")}
          </span>
        </li>
        <li className="section__li">
          <strong>{t("TITLE4")}</strong>
          <span >
          {t("TITLE4 DESCRIPTION")}
          </span>
        </li>
      </ul>
    </section>

        </div>
  )
}

export default Abaut