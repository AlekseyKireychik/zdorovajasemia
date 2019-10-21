import React from "react";
import "./Phone.css";

// const numberPhone = {
//   numberOne: "+375 (29) 829 69 56",
//   numberTwo: "+375 (16) 253 48 95"
// };

const Phone = props => {
  return <a href={"tel:" + props.numberhref}>{props.number}</a>;
};

export default Phone;
