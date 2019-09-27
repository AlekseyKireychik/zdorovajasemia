import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => (
  <div className={style.navigation}>
      <ul className={style.nav}>
        <li><NavLink to="/home" activeClassName={style.active}>Главная</NavLink></li>
        <li><NavLink to="/about">О нас</NavLink></li>
        <li><NavLink to="/services">Услуги</NavLink></li>
        <li><NavLink to="/products">Массажные коврики</NavLink></li>        
        <li><NavLink to="team">Наша команда</NavLink></li>
        <li><NavLink to="/reviews">Отзывы</NavLink></li>
        <li><NavLink to="/contacts">Контакты</NavLink></li>
      </ul>
  </div>
);

export default Navigation;
