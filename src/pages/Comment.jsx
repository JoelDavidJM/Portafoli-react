import React, { useEffect, useState } from 'react'
import './style/slider.css'
import { useTranslation } from 'react-i18next';
import Clima from '../../public/clima.png'
import Fortuna from '../../public/fortuna.png'
import Hotel from '../../public/hotelApp.png'
import Pokedex from '../../public/pokedex.png'
import RickYMorty from '../../public/rickYmorty.png'
import Users from '../../public/userCrud.png'

const Comment = () => {

  const [items, setItems] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);
    const [countItem, setCountItem] = useState(0);
    const [itemActive, setItemActive] = useState(0);
  
    useEffect(() => {
      const items = document.querySelectorAll('.slider .list .item');
      const thumbnails = document.querySelectorAll('.thunbnall .item');
      setItems(items);
      setThumbnails(thumbnails);
      setCountItem(items.length);
    }, []);
  
    useEffect(() => {
      showSlider();
    }, [itemActive]);
  
    const handleClickNext = () => {
      setItemActive(itemActive + 1 >= countItem ? 0 : itemActive + 1);
    };
  
    const handleClickPrev = () => {
      setItemActive(itemActive - 1 < 0 ? countItem - 1 : itemActive - 1);
      showSlider(); 
    };
  
    const showSlider = () => {
      items.forEach((item, index) => {
        if (index === itemActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active'); 
        }
      });
  
      thumbnails.forEach((thumbnail, index) => {
        if (index === itemActive) {
          thumbnail.classList.add('active');
        } else {
          thumbnail.classList.remove('active'); 
        }
      });
    };

    useEffect(() => {
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                setItemActive(index);
                showSlider();
            });
        });
        
      
        return () => {
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.removeEventListener('click', () => {
                    setItemActive(index);
                    showSlider();
                });
            });
        };
    }, [thumbnails]);

    const { t } = useTranslation()

  return (
    <div className="slider">
    <div  className="list">
        <div className="item active">
            <img src={Clima} alt="" /> 
            <div className="content">
                <button className="btn__proyect"><a href="https://tiempo-climatico.onrender.com" className='link__container'>{t("LINK6")}</a></button>
                <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/Tiempo.git" className='link__container'>{t("CODE")}</a></button>                
                <h2>{t("TITLETIME")}</h2>
                <p>{t("TIME")}</p>
            </div>
        </div>
        <div className="item">
            <img src={Fortuna} alt="" />
            <div className="content">
            <button className="btn__proyect"><a href="https://proyecto-galleta.onrender.com" className='link__container'>{t("LINK1")}</a></button>
            <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/Galleta-Fortuna.git" className='link__container'>{t("CODE")}</a></button> 
                <h2>{t("TITLELUCK")}</h2>
                <p>{t("LUCK")}</p>
            </div>
        </div>
        <div className="item">
            <img src={Pokedex} alt="" />
            <div className="content">
            <button className="btn__proyect"><a href="https://pokemon-6uer.onrender.com" className='link__container'>{t("LINK2")}</a></button>
            <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/Pokedex.git" className='link__container'>{t("CODE")}</a></button>
                <h2>{t("TITLEPOKEDEX")}</h2>
                <p>{t("POKEDEX")}</p>
            </div>
        </div>
        <div className="item">
            <img src={RickYMorty} alt="" />
            <div className="content">
            <button className="btn__proyect"><a href="https://mick-and-morty.onrender.com" className='link__container'>{t("LINK3")}</a></button>
            <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/Rick-and-Morty.git" className='link__container'>{t("CODE")}</a></button>
                <h2 className='rickMorty'>{t("TITLERANDM")}</h2>
                <p>{t("RANDM")}</p>
            </div>
        </div>
        <div className="item">
            <img src={Users} alt="" />
            <div className="content">
              <button className="btn__proyect"><a href="https://user-crud-sddl.onrender.com" className='link__container'>{t("LINK4")}</a></button>
              <button className="btn__proyect"><a href="https://documenter.getpostman.com/view/33126947/2sA2rCUgih" className='link__container'>{t("LINK7")}</a></button>
              <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/user-CRUD-APP-frontend.git" className='link__container'>{t("CODE")}</a></button>
              <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/users-crud-API-backend.git" className='link__container'>{t("CODE1")}</a></button>
            <h2>{t("TITLECRUD")}</h2>
                <p>{t("CRUD")}</p>
            </div>
        </div>
        <div className="item">
            <img src={Hotel} alt="" />
            <div className="content">
              <button className="btn__proyect"><a href="https://boking.onrender.com" className='link__container'>{t("LINK5")}</a></button>
              <button className="btn__proyect"><a href="https://documenter.getpostman.com/view/33126947/2sA35D6jFU" className='link__container'>{t("LINK8")}</a></button>
              <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/Hotels.git" className='link__container'>{t("CODE")}</a></button>
              <button className="btn__proyect"><a href="https://github.com/JoelDavidJM/booking.git" className='link__container'>{t("CODE1")}</a></button>
            <h2>{t("TITLEHOTEL")}</h2>
                <p>{t("HOTEL")}</p>
            </div>
        </div>
    </div>

    <div className="arrow">
        <button onClick={handleClickPrev} id="prev"><i className='bx bxs-left-arrow'></i></button>
        <button onClick={handleClickNext} id="next"><i className='bx bxs-right-arrow'></i></button>
    </div>

    <div  className="thunbnall">
        <div className="item active">
            <img src={Clima} alt="" />
            <div className="content">
            {t("TITLETIME")}
            </div>
        </div>
        <div className="item">
            <img src={Fortuna} alt="" />
            <div className="content">
            {t("TITLELUCK")}
            </div>
        </div>
        <div className="item">
            <img src={Pokedex} alt="" />
            <div className="content">
            {t("TITLEPOKEDEX")}
            </div>
        </div>
        <div className="item">
            <img src={RickYMorty} alt="" />
            <div className="content">
            {t("TITLERANDM")}
            </div>
        </div>
        <div className="item">
            <img src={Users} alt="" />
            <div className="content">
            {t("TITLECRUD")}
            </div>
        </div>
        <div className="item">
            <img src={Hotel} alt="" />
            <div className="content">
            {t("TITLEHOTEL")}
            </div>
        </div>
    </div>

</div>
  )
}

export default Comment