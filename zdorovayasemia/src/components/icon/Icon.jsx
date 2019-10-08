import React, { Component } from "react";
import style from "./Icon.module.css";

const Icon = props => {
  return <img src={props.linkImg} alt={props.altText}/>;
};

export default Icon;
