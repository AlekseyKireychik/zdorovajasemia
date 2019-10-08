import React, { Component } from "react";
import "./Social.module.css";

const Social = props => {
  return (
    <a href={props.link}>
      <img src={props.linkImg} alt={props.nameImg} />
    </a>
  );
};

export default Social;
