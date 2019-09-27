import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => (
  <div className={style.navigation}>
      <ul className={style.nav}>
        <li><NavLink exact to="/home">Главная</NavLink></li>
        <li><NavLink to="/about">О нас</NavLink></li>
        <li><NavLink to="/services">Услуги</NavLink></li>
        {/* <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/button">Button</NavLink></li>
        <li><NavLink to="/button-group">Button Group</NavLink></li>
        <li><NavLink to="/icon">Icon</NavLink></li>
        <li><NavLink to="/image">Image</NavLink></li>
        <li><NavLink to="/chip">Chip</NavLink></li>
        <li><NavLink to="/badge">Badge</NavLink></li>
        <li><NavLink to="/list-group">List Group</NavLink></li>
        <li><NavLink to="/input">Input</NavLink></li>
        <li><NavLink to="/tabbar">Tabbar</NavLink></li>
        <li><NavLink to="/tooltip">Tooltip</NavLink></li>
        <li><NavLink to="/modal">Modal</NavLink></li> */}
      </ul>
  </div>
);

export default Navigation;
