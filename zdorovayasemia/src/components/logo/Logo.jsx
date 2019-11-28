import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.logoWrap}>
      <NavLink to="/" className={style.logoLink}>
        <img
          className={style.logoImg}
          src="../../asset/images/logo.jpg"
          alt="Массажно-оздоровительный центр «Здоровая семья»"
        ></img>
      </NavLink>
    </div>
  );
};
export default Logo;
