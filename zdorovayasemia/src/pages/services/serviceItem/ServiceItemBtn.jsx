import React from "react";
import style from "./ServiceItemBtn.module.css";
const ServiceItemBtn = (props, onClick) => {
  return (
    <li className={style.item}>
      <span className={style.btn}>
        {props.children}
      </span>
    </li>
  );
};

export default ServiceItemBtn;
