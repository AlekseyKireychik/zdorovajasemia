import React from "react";
import style from "./Specialist.module.css";

const Specialist = props => {
  return (
    <div className={style.wrap}>
      <img src={props.image} className={style.img}></img>
      <span className={style.title}>{props.name}</span>
      <span className={style.description}>{props.description}</span>
    </div>
  );
};

export default Specialist;
