import React from "react";
import PropTypes from "prop-types";
import style from "./NamePage.module.css";

const NamePage = ({ children }) => {
  return <h1 className={style.title}>{children}</h1>;
};
NamePage.propTypes = {
  children: PropTypes.node
};
NamePage.defaultProps = {
  children: ""
};
export default NamePage;
