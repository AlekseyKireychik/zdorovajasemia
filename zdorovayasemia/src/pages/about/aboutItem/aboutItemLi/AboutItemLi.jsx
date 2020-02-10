import React from "react";
import style from "./AboutItemLi.module.css";

const AboutItemLi = ({ text }) => {
  return <li className={style.item}>{text}</li>;
};
export default AboutItemLi;
