import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => (
  <div className={style.navigation}>
      <ul className={style.nav}>
        <li><NavLink to="/home">Главная</NavLink></li>
        <li><NavLink to="/about">О нас</NavLink></li>
        <li><NavLink to="/services">Услуги</NavLink></li>
        <li><NavLink to="/input">Input</NavLink></li>
        <li><NavLink to="/tabbar">Tabbar</NavLink></li>
        <li><NavLink to="/tooltip">Наша команда</NavLink></li>
        <li><NavLink to="/modal">Отзывы</NavLink></li>
      </ul>
  </div>
);

export default Navigation;
