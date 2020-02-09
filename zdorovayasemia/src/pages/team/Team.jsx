import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import Specialist from "../../components/specialists/specialist/Specialist";
// import SpecialistsItems from "../../components/specialists/SpecialistItems";
import Store from "../../store";
import style from "./Team.module.css";

const ValTeamItemConten = Store._state.pageTeam.teamData.map(item => {
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

const Team = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage={Store._state.pageTeam.info.background}
        children={Store._state.pageTeam.info.title}
      />
      <div className={style.container}>
        <ul className={style.list}>
          {ValTeamItemConten}
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Team;
