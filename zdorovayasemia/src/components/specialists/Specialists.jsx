import React from "react";
import style from "./Specialists.module.css";
import { NavLink } from "react-router-dom";
import Store from "../../store";
import Specialist from "./specialist/Specialist";
// import SpecialistsItems from "./specialists/SpecialistItems";

const ValTeamItemConten = Store.pageTeam.teamData.map(item => {
  return (
    <Specialist
      key={"0" + item.id}
      name={item.name}
      src={item.img}
      width="270"
      height="inherit"
      position={item.position}
      description={item.description}
    />
  );
});

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
        {ValTeamItemConten[0]}
        {ValTeamItemConten[1]}
      </ul>
    </section>
  );
};
export default Specialists;
