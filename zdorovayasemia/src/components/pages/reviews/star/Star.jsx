import React from "react";
import PropTypes from "prop-types";
import Image from "../../../image/Image";
import style from "./Star.module.css";

const infoStar = {
  width: 18,
  height: 18,
  srcPrimary: "..//images/icons/star-active.svg",
  src: "..//images/icons/star-favourite.svg"
};

const Star = ({ starActive }) => {
  const src = starActive ? infoStar.srcPrimary : infoStar.src;
  return <Image width={infoStar.width} height={infoStar.width} src={src} />;
};

Star.propTypes = {
  starActive: PropTypes.bool
};

Star.defaultProps = {
  starActive: false
};
export default Star;
