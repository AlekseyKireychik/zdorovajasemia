import React from "react";
import style from "./AboutItem.module.css";

const AboutItem = ({ title, text, img }) => {
  return (
    <section className={style.item}>
      <div className={style.wrapText}>
        <h3>{title}</h3>
        <ul>{text}</ul>
      </div>
      <div className={style.wrapImg}>
        <img src={img} alt={title} />
      </div>
    </section>
  );
};
export default AboutItem;
