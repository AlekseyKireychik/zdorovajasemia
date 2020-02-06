import React from "react";
import style from "./AboutItemLi.module.css";

const AboutItemLi = props => {
  return (
    <li className={style.item}>
     {props.text}
    </li>
  );
};
export default AboutItemLi;
