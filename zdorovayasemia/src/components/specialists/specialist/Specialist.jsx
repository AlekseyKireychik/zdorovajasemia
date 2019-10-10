import React from "react";
import Image from "../../image/Image";
import style from "./Specialist.module.css";

const Specialist = props => {
  return (
    <div className={style.wrap}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <span className={style.title}>{props.name}</span>
      <span className={style.description}>{props.description}</span>
    </div>
  );
};

export default Specialist;
