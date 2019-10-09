import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Icon.module.css";

const Icon = ({ src, alt, onClick, width, disabled, ...attrs }) => {
  const elemWidth = width ? { width: `${width}px` } : null;
  return (
    <img
      className={style.icon}
      src={src}
      alt={alt}
      onClick={disabled ? null : onClick}
      style={elemWidth}
    />
  );
};
Icon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  width: PropTypes.number
};

Icon.defaultProps = {
  src: "",
  alt: "",
  onClick: () => {},
  disabled: false,
  width: null
};
export default Icon;
