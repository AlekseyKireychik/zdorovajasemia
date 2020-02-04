import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ServiceItemBtn.module.css";
const ServiceItemBtn = (props, onClick) => {
  return (
    <li className={style.item}>
      <a href={props.href} className={style.btn}>
        {props.children}
      </a>
    </li>
  );
};

export default ServiceItemBtn;
