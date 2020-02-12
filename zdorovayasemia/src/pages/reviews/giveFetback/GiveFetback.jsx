import React from "react";
import Button from "../../../components/button/Button";
import style from "./GiveFetback.module.css";
import PropTypes from "prop-types";

const GiveFetback = ({ children, title, subTitle, onClick }) => {
  return (
    <div className={style.wrap}>
      <div className={style.wrapText}>
        <span className={style.title}>{title}</span>
        <p className={style.subTitle}>{subTitle}</p>
      </div>
      <Button children={children} onClick={onClick} />
    </div>
  );
};

GiveFetback.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

GiveFetback.defaultProps = {
  title: "Title",
  subTitle: "Sub Title"
};

export default GiveFetback;
