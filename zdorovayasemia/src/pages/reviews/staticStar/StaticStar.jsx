import React from "react";
import PropTypes from "prop-types";
import Image from "../../../components/image/Image";

const infoStar = {
  width: 18,
  height: 18,
  srcPrimary: "..//images/icons/star-active.svg",
  src: "..//images/icons/star-favourite.svg"
};

const StaticStar = ({ starActive }) => {
  const src = starActive ? infoStar.srcPrimary : infoStar.src;
  return <Image width={infoStar.width} height={infoStar.width} src={src} />;
};

StaticStar.propTypes = {
  starActive: PropTypes.bool
};

StaticStar.defaultProps = {
  starActive: false
};
export default StaticStar;
