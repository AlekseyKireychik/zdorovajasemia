import React from "react";
import style from "./Newspost.module.css";

const Newspost = props => {
  return (
    <li className={style.item}>
      <a className={style.link} href={props.link}>
        <img src={props.image} className={style.img}></img>
        <div className={style.overlay}></div>
        <span className={style.description}>{props.description}</span>
      </a>
    </li>
  );
};

export default Newspost;
