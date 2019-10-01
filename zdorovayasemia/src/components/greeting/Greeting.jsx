import React from "react";
import style from "./Greeting.module.css";

const Greeting = (props) => {
  return (
    <section className={style.greeting}>
      <h1 className={style.title}>{props.title}</h1>
      <p className={style.text}>{props.text}</p>
    </section>
  );
};

export default Greeting;
