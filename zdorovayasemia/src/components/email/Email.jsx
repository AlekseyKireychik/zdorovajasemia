import React, { Component } from "react";
import "./Email.module.css";

const Email = props => {
  return <a href={"mailto:" + props.email}>{props.email}</a>;
};

export default Email;
