import React from "react";
import { NavLink } from "react-router-dom";
import style from ".//Navigation.module.css";

const Navigation = () => (
  <div className={style.navigation}>
    <ul className={style.nav}>
      <li>
        <NavLink to="/">Главная</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName={style.active}>
          О нас
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" activeClassName={style.active}>
          Услуги
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" activeClassName={style.active}>
          Продукты
        </NavLink>
      </li>
      <li>
        <NavLink to="/team" activeClassName={style.active}>
          Наша команда
        </NavLink>
      </li>
      <li>
        <NavLink to="/reviews" activeClassName={style.active}>
          Отзывы
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" activeClassName={style.active}>
          Блог
        </NavLink>
      </li>
      <li>
        <NavLink to="/contacts" activeClassName={style.active}>
          Контакты
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
