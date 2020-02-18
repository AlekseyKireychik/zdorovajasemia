import React from "react";
import style from "./Greeting.module.css";

const Greeting = (props) => {
  return (
    <section className={style.greeting}>
      <div className={style.container}>
        <h1 className={style.title}>{props.title}</h1>
        <p className={style.text}>{props.text}</p>
      </div>
    </section>
  );
};

export default Greeting;
