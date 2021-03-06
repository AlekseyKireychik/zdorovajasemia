import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ children, className, onClick, disabled, active, ...attrs }) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };
  const Tag = attrs.href ? "a" : "button";
  const classes = `${className}` ? `${style.btnPrimary}` : `${style.btn}`;
  return (
    <Tag
      {...attrs}
      className={`${classes}`}
      disabled={disabled}
      onClick={onClickAction}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

Button.defaultProps = {
  children: "Default button",
  onClick: () => {},
  disabled: false,
  active: false
};
export default Button;
