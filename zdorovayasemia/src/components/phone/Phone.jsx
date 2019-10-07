import React, { Component } from "react";
import "./Phone.css";

const Phone = props => {
  return (
    <a className="phoneLink" href={"tel:" + (props.numberhref) }>
      {props.number}
    </a>
  );
};

export default Phone;
