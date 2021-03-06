import React from "react";
import NamePage from "./namePage/NamePage";
import PropTypes from "prop-types";
import style from "./InnerBanner.module.css";

const InnerBanner = ({ children, bgimage }) => {
  return (
    <section
      className={style.banner}
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className={style.container}>
        <NamePage children={children} />
      </div>
    </section>
  );
};
InnerBanner.propTypes = {
  children: PropTypes.node,
  bgimage: PropTypes.string
};
InnerBanner.defaultProps = {
  children: "",
  bgimage: ""
};

export default InnerBanner;
