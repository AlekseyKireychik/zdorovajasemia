import React from "react";
import style from "./Specialists.module.css";
import { NavLink } from "react-router-dom";
import Specialist from "./specialist/Specialist";

const Specialists = props => {
  return (
    <section className={style.specialists}>
      <div className={style.container}>
        <h2 className={style.title}>Наши мастера</h2>
        <NavLink className={style.link} to="team">
          Посмотреть всех
        </NavLink>
      </div>
      <ul className={style.container}>
        <Specialist
          name="Дубовский Илья Олегович"
          src="../../images/specialist.jpg"
          width="270"
          height="inherit"
          position="Директор"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla sed est varius egestas aliquet. Tempor venenatis, volutpat eget faucibus viverra venenatis, id. At nibh justo, urna urna pellentesque augue massa.
           At morbi tristique amet lorem sed tincidunt sem sit. Quam tortor tristique pretium, tortor turpis sit est a. Lobortis urna, facilisis senectus pellentesque. Mauris, amet varius in nisl, aenean. Nunc amet, lacus mattis et nunc nascetur dictum vitae. Justo, in neque vel lacus porta lacinia laoreet quam. Adipiscing id eleifend sed amet commodo. Amet duis mi scelerisque ut consequat nulla tristique quam."
        />
        <Specialist
          name="Дубовский Илья Олегович"
          src="../../images/specialist02.jpg"
          width="270"
          height="inherit"
          position="Название"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla sed est varius egestas aliquet. Tempor venenatis, volutpat eget faucibus viverra venenatis, id. At nibh justo, urna urna pellentesque augue massa. At morbi tristique amet lorem sed tincidunt sem sit. Quam tortor tristique pretium, tortor turpis sit est a. Lobortis urna, facilisis senectus pellentesque. Mauris, amet varius in nisl, aenean. Nunc amet, lacus mattis et nunc nascetur dictum vitae. Justo, in neque vel lacus porta lacinia laoreet quam. Adipiscing id eleifend sed amet commodo. Amet duis mi scelerisque ut consequat nulla tristique quam."
        />
      </ul>
    </section>
  );
};
export default Specialists;
