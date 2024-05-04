import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style/sidebar.css'
import ReactSwitch from 'react-switch'
import { useThemeContext } from '../contect/ThemaContext';
import Photo from '../../public/phtotoOfFace.png'

const Sidebar = ({children}) => {

  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen (!isOpen)
  const menuItem = [
    {
      path: "/",
      name: `${t("NAME1")}`,
      icon:<i className='bx bxs-home-alt-2'></i>
    },
    {
      path: "/sobre mi",
      name: `${t("NAME2")}`,
      icon:<i className='bx bxs-user-circle'></i>
    },
    {
      path: "/tecnologias", 
      name: `${t("NAME3")}`,
      icon:<i className='bx bxs-category'></i>
    },
    {
      path: "/proyectos",
      name: `${t("NAME4")}`,
      icon:<i className='bx bxs-dice-6'></i>
    },
    {
      path: "/contacto",
      name: `${t("NAME5")}`,
      icon:<i className='bx bxs-phone'></i>
    }
    ]

    const { i18n } = useTranslation();

    const currentLanguage = i18n.language;

    const changeLanguage = () => {
        const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage);
    };

    const {contextTheme, setContextTheme} = useThemeContext()
  const [checked, setChecked] = useState(true);

  const handleSwitch = (nextChecked) => {       
    setContextTheme((state) => (state === 'Light' ? 'Dark':'Light'))       
    setChecked(nextChecked);
  }
    
    
  return (
    <div id={contextTheme} className='container'>
        <div style={{width: isOpen ? "10em" : "3em"}}className="sidebar sidebar1"  >
          <div className="top_section">
            <img style={{display: isOpen ? "block" : "none"}} className="logo" src={Photo} alt="" />
            {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
            <div style={{marginLeft: isOpen ? "20px" : "0px"}} id={contextTheme} className="bars">
              <FaBars onClick={toggle}/>
            </div>
          </div>
          <div className='sidebar__div-icons'>
            <div className='sidebar__media'>
              {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className={'link' || 'active'} >
                <div className='icom'>{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
              </NavLink>
            ))
          }
            </div>
          <div  className='sidebar__choose__container'>
            <div className='change__mode'>
            <ReactSwitch 
          onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={15}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={10}
          width={28}
          className="react-switch"
          id="material-switch"
        /> 
            </div>
            <div className='change__lengish'>
              <button onClick={changeLanguage}>
                {currentLanguage === 'es' ? (
                    <i className='bx bx-sort-a-z' ></i>
                ) : (
                  <i className='bx bx-sort-z-a'></i>
                )}
            </button>
            </div>
        </div>
          
          </div>
          
        </div>
        
        <main>{children}</main>
        
    </div>
  )
}

export default Sidebar