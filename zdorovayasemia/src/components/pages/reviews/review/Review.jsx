import React from "react";
import PropTypes from "prop-types";
import Image from "../../../image/Image";
import Star from "../star/Star";
import style from "./Review.module.css";

const infoIconUser = {
  width: 14,
  height: 15,
  src: "..//images/icons/person.svg"
};
const Review = ({ date, name, title, text }) => {
  return (
    <React.Fragment>
      <div className={style.container}>
        <div className={style.review}>
          <div className={style.reviewInfo}>
            <div className={style.reviewLeft}>
              <div className={style.reviewDate}>{date}</div>
              <div className={style.reviewName}>
                <Image
                  width={infoIconUser.width}
                  height={infoIconUser.height}
                  src={infoIconUser.src}
                />
                {name}
              </div>
            </div>
            <div className={style.reviewRang}>
              <div className={style.reviewCounter}>5</div>
              <div className={style.reviewStars}>
                <Star starActive />
                <Star starActive />
                <Star starActive />
                <Star starActive />
                <Star starActive />
              </div>
            </div>
          </div>
          <div className={style.reviewText}>
            <span className={style.title}>{title}</span>
            <p className={style.text}>{text}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Review.propTypes = {
  date: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

Review.defaultProps = {
  date: "",
  name: "",
  title: "",
  text: ""
};

export default Review;
