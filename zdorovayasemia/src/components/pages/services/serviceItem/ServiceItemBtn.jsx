import React from "react";
import Icon from "../../../icon/Icon";
import style from "./ServiceItemBtn.module.css";
const ServiceItemBtn = (props, onClick) => {
  return (
    <li className={style.item}>
      <span className={style.btn}>
        <Icon src="..//images/icons/checkbox.svg" width={props.width} />
        {props.children}
        <span className={style.btnHover}>{props.btnHoverName}</span>
      </span>
    </li>
  );
};

export default ServiceItemBtn;
