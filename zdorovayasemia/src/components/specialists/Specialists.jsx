import React from "react";
import style from "./Specialists.module.css";
import Specialist from "./specialist/Specialist";

const Specialists = props => {
  return (
    <section className={style.specialists}>
      <div className={style.container}>
        <h2 className={style.title}>Наши мастера</h2>
        <a className={style.link} href="/">
          Посмотреть
        </a>
      </div>
      <ul className={style.container}>
        <Specialist
          name="Дубовский Илья Олегович"
          image="../../images/specialist.jpg"
          description="Директор"
        />
        <Specialist
          name="Дубовский Илья Олегович"
          image="../../images/specialist.jpg"
          description="Директор"
        />
        <Specialist
          name="Дубовский Илья Олегович"
          image="../../images/specialist.jpg"
          description="Директор"
        />
        <Specialist
          name="Дубовский Илья Олегович"
          image="../../images/specialist.jpg"
          description="Директор"
        />
      </ul>
    </section>
  );
};
export default Specialists;
