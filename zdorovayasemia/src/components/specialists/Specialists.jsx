import React from "react";
import style from "./Specialists.module.css";
import { NavLink } from 'react-router-dom';
import Specialist from "./specialist/Specialist";

const Specialists = props => {
  return (
    <section className={style.specialists}>
      <div className={style.container}>
        <h2 className={style.title}>Наши мастера</h2>
        <NavLink className={style.link} to="team">
          Посмотреть все
        </NavLink>
      </div>
      <ul className={style.container}>
        <Specialist
          name="Дубовский Илья Олегович"
          src="../../images/specialist.jpg"
          width="270"
          height="inherit"
          description="Директор"
        />
        <Specialist
          name="Дубовский Илья Олегович"
          src="../../images/specialist.jpg"
          width="270"
          height="inherit"
          description="Директор"
        />
        <Specialist
          name="Дубовский Илья Олегович"
          src="../../images/specialist.jpg"
          width="270"
          height="inherit"
          description="Директор"
        />
        <Specialist
          name="Дубовский Илья Олегович"
          src="../../images/specialist.jpg"
          width="270"
          height="inherit"
          description="Директор"
        />
      </ul>
    </section>
  );
};
export default Specialists;
