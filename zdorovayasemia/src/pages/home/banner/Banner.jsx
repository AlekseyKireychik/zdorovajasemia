import React from "react";
import style from "./Banner.module.css";
import Slideshow from "./slide/Slide.jsx";
import storeDate from "date";

const Banner = (props) => {
  return (
    <div
      className={style.banner}
      style={{
        backgroundImage: `url(${storeDate.date.pageHome.banner.backgroundBanner})`,
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
