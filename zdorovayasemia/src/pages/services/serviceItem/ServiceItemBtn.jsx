import React from "react";
import style from "./ServiceItemBtn.module.css";
const ServiceItemBtn = (props, onClick) => {
  return (
    <li className={style.item}>
      <a href="#" className={style.btn}>
        {props.children}
      </a>
    </li>
  );
};

export default ServiceItemBtn;
