import React from "react";
import PropTypes from "prop-types";
import style from "./Image.module.css";

const Image = ({ src, alt, width, height, ...attrs }) => {
  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }
  return (
    <img
      className={style.image}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...attrs}
    />
  );
};
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

Image.defaultProps = {
  src: "",
  alt: "Image name",
  width: 100,
  height: 100
};
export default Image;
