import React from "react";
import style from "./AboutItem.module.css";

const AboutItem = props => {
  return (
    <section className={style.item}>
      <div className={style.wrapText}>
        <h3>{props.title}</h3>
        <ul>
          {props.text}
        </ul>
      </div>
      <div className={style.wrapImg}>
        <img src={props.img} alt={props.title} />
      </div>
    </section>
  );
};
export default AboutItem;
