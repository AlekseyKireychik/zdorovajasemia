import React from "react";
import style from "./ServicesItemContent.module.css";

const ServicesItemContent = props => {
  return (
    <section className="servicesItem" id={"service" + props.data_id} data-attr={props.data_id}>
      {props.title !== "" ? <h2 className={style.title}>{props.title}</h2> : ""}

      {props.description !== "" ? <span>{props.description}</span> : ""}

      {props.subTitle !== "" ? (
        <h3 className={style.subTitle}>{props.subTitle}</h3>
      ) : (
        ""
      )}

      {props.list !== "" ? (
        <ul className={style.list}>
          {props.list.map((elem, index) => {
            return <li key={index}>{elem}</li>;
          })}
        </ul>
      ) : (
        ""
      )}

      {props.text !== "" ? <p>{props.text}</p> : ""}

      {props.subTitle !== "" ? (
        <h3 className={style.subTitle}>{props.subTitleTwo}</h3>
      ) : (
        ""
      )}

      {props.listTwo !== undefined ? (
        <ul className={style.listTwo}>
          {props.listTwo.map((elem, index) => {
            return <li key={index}>{elem}</li>;
          })}
        </ul>
      ) : (
        ""
      )}

      {props.textTwo !== "" ? <p>{props.textTwo}</p> : ""}
    </section>
  );
};

export default ServicesItemContent;
