import React from "react";
import style from "./ServicesItemContent.module.css";
const ServicesItemContent = props => {
  return (
    <section className={style.item}>
      <h2 className={style.title}>{props.title}</h2>
      <span className={style.subTitle}>{props.subTitle}</span>
      <ul className={style.list}>
      {props.list}
      </ul>
      <p>{props.text}</p>
    </section>
  );
};

export default ServicesItemContent;
