import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ServiceItemBtn.module.css";
const ServiceItemBtn = (props, onClick) => {
  return (
    <li className={style.item}>
      <NavLink to={"/services/" + props.id} className={style.btn}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default ServiceItemBtn;
