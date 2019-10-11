import React from "react";
import Image from "../../image/Image";
import style from "./Specialist.module.css";

const Specialist = props => {
  return (
    <li className={style.wrap}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <div className={style.wrapInfo}>
        <span className={style.title}>{props.name}</span>
        <span className={style.position}>{props.position}</span>
        <span className={style.description}>{props.description}</span>
      </div>
    </li>
  );
};

export default Specialist;
