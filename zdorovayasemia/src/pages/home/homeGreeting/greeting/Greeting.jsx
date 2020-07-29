import React from "react";
import style from "./Greeting.module.css";
import PropTypes from "prop-types";

const Greeting = (props) => {

    const {title, text} = props;

  return (
    <section className={style.greeting}>
      <div className={style.container}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.text}>{text}</p>
      </div>
    </section>
  );
};

Greeting.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
};

Greeting.defaultProps = {
    title: "",
    text: ""
};

export default Greeting;
