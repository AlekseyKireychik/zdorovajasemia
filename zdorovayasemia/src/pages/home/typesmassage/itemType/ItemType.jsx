import React from "react";
import style from "./ItemType.module.css";
const ItemType = props => {
  return (
    <li className={style.item}>
      <div>
        <h3 className={style.subtitle}>{props.subtitle}</h3>
        <p className={style.description}>{props.description}</p>
      </div>
      <a className={style.link} href={props.link}>
        {props.valueLink}
      </a>
    </li>
  );
};
export default ItemType;
