import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import Specialist from "../../components/specialists/specialist/Specialist";
import style from "./Team.module.css";

const Team = props => {
  return (
    <React.Fragment>
      <InnerBanner bgimage="..//images/team.jpg" children="Наша команда" />
      <div className={style.container}>
        <h2>Наши специалисты</h2>
        <ul className={style.list}>
            <Specialist
              name="Дубовский Илья Олегович"
              src="../../images/specialist.jpg"
              width="270"
              height="inherit"
              position="Директор"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <Specialist
              name="Дубовский Илья Олегович"
              src="../../images/specialist02.jpg"
              width="270"
              height="inherit"
              position="Директор"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <Specialist
              name="Дубовский Илья Олегович"
              src="../../images/specialist03.jpg"
              width="270"
              height="inherit"
              position="Директор"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Team;
