import React from "react";
import "./Phone.css";

const Phone = props => {
  return <a href={"tel:" + props.numberhref}>{props.number}</a>;
};

export default Phone;
