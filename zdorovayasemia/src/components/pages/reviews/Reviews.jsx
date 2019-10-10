import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Image from "../../image/Image";
import style from "./Reviews.module.css";

const Reviews = props => {
  return (
    <div>
      <InnerBanner
        bgimage="..//images/mainpic.jpg"
        children="Отзывы"
      />
    </div>
  );
};

export default Reviews;
