import React from "react";
import style from "./Banner.module.css";
import Slideshow from "./slide/Slide.jsx";

let Background = "..//images/detsky-massag-bg.jpg";

const Banner = props => {
  return (
    <div
      className={style.banner}
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className={style.bannerCaption}>
        <div className={style.bannerSlide}>
          <Slideshow />
        </div>
      </div>
    </div>
  );
};

export default Banner;
