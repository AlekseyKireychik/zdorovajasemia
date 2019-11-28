import React from "react";
import style from "./ServicesItemContent.module.css";

// const ValServiceItemli = servicesDate.list.map(item => {
//   return (
//     <li>      
//       item
//     </li>
//   );
// });

const ServicesItemContent = props => {
  return (
    <section className="ServicesItem">
      {props.title !== "" ? <h2 className={style.title}>{props.title}</h2> : ""}
      {props.description !== "" ? <span>{props.description}</span> : ""}
      {props.subTitle !== "" ? (
        <h3 className={style.subTitle}>{props.subTitle}</h3>
      ) : (
        ""
      )}
      <ul className={style.list}></ul>
      {props.text !== "" ? <p>{props.text}</p> : ""}
      {props.subTitle !== "" ? (
        <h3 className={style.subTitle}>{props.subTitleTwo}</h3>
      ) : (
        ""
      )}
      {props.listTwo !== "" ? (
        <ul className={style.listTwo}>{props.listTwo}</ul>
      ) : (
        ""
      )}
      {props.textTwo !== "" ? <p>{props.textTwo}</p> : ""}
    </section>
  );
};

export default ServicesItemContent;
