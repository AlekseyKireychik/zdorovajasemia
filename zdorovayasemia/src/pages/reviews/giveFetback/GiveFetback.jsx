import React from "react";
import Button from "../../../components/button/Button";
import style from "./GiveFetback.module.css";
import PropTypes from "prop-types";

const GiveFetback = ({ children, title, subTitle, onClick }) => {
  let schowReviewsForm = () => {
    alert(`показать форму!!!!`);
  };
  return (
    <div className={style.wrap}>
      <div className={style.wrapText}>
        <span className={style.title}>{title}</span>
        <p className={style.subTitle}>{subTitle}</p>
      </div>
      <Button children={children} onClick={schowReviewsForm} />
    </div>
  );
};

GiveFetback.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

GiveFetback.defaultProps = {
  title: "subTitle title",
  subTitle: "subTitle sub title"
};

export default GiveFetback;
