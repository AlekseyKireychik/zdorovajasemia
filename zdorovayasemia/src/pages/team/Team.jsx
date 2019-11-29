import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import Specialist from "../../components/specialists/specialist/Specialist";
import Store from "../../store";
import style from "./Team.module.css";

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

const Team = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage={Store.pageTeam.info.background}
        children={Store.pageTeam.info.title}
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
