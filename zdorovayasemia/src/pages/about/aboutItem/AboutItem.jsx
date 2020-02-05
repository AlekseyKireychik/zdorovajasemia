import React from "react";
import Store from "../../../store";
import AboutItemLi from "./aboutItemLi/AboutItemLi";
import style from "./AboutItem.module.css";
const AboutItem = props => {
  return (
    <section className={style.item}>
      <div className={style.wrapText}>
        <h3>{props.title}</h3>
        <ul>
          <AboutItemLi description={props.description} />
        </ul>
      </div>
      <div className={style.wrapImg}>
        <img src={props.img} alt={props.title} />
      </div>
    </section>
  );
};
export default AboutItem;
