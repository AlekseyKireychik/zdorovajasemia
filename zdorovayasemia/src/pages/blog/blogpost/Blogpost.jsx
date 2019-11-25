import React from "react";
import Image from "../../../components/image/Image";
import Button from "../../../components/button/Button";
import style from "./Blogpost.module.css";

const Blogpost = props => {
  return (
    <div className={style.item}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <div className={style.content}>
        <h2>Заголовок новости</h2>
        <p>Lorem impson impson impson impson impson impson </p>
        <Button
          children={props.children}
          disabled={props.disabled}
          onClick={props.onClickAction}
        />
      </div>
    </div>
  );
};
export default Blogpost;
