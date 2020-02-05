import React from "react";
import Store from "../../../../store";
import style from "./AboutItemLi.module.css";

const AboutItemLi = props => {
  return (
    <li className={style.item}>
     {props.description}
    </li>
  );
};
export default AboutItemLi;
