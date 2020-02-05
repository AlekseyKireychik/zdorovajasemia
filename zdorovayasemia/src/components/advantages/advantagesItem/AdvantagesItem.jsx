import React from "react";
import style from "./AdvantagesItem.module.css";
const AdvantagesItem = props => {
  return (
    <li className={style.item}>
      <h3 className={style.subtitle}>{props.title}</h3>
      <p>{props.text}</p>
    </li>
  );
};

export default AdvantagesItem;
