import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => (
  <div className={style.navigation}>
      <ul className={style.nav}>
        <li><NavLink to="/" activeClassName={style.active}>Главная</NavLink></li>
        <li><NavLink to="/about" activeClassName={style.active}>О нас</NavLink></li>
        <li><NavLink to="/services" activeClassName={style.active}>Услуги</NavLink></li>
        <li><NavLink to="/products" activeClassName={style.active}>Массажные коврики</NavLink></li>        
        <li><NavLink to="/team" activeClassName={style.active}>Наша команда</NavLink></li>
        <li><NavLink to="/reviews" activeClassName={style.active}>Отзывы</NavLink></li>
        <li><NavLink to="/contacts" activeClassName={style.active}>Контакты</NavLink></li>
      </ul>
  </div>
);

export default Navigation;
