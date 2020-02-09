import React from "react";
import style from "./Banner.module.css";
import Slideshow from "./slide/Slide.jsx";
import Store from "../../store";

const Banner = props => {
  return (
    <div
      className={style.banner}
      style={{
        backgroundImage: `url(${Store._state.pageHome.banner.backgroundBanner})`
      }}
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
