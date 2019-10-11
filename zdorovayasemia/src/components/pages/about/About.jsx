import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import style from "./About.module.css";

const About = props => {
  return (
    <div>
      <InnerBanner bgimage="..//images/aboutus.jpg" children="О нас" />
      <div className={style.container}>
        <h2>доброжелательный коллектив.</h2>
      </div>
    </div>
  );
};
export default About;
