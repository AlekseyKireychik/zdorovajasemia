import React from "react";
import Adress from "../adress/Adress";
import Phone from "../phone/Phone";
import style from "./Footer.module.css";

const Footer = props => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.list}>
          <Adress value="г.Брест, ул.Орджоникидзе, 39" />
          <span>Массажно-оздоровительный центр «Здоровая семья»</span>
        </div>
        <div className={style.list}></div>
        <ul className={style.phoneList}>
          <li className={style.phoneItem}>
            <Phone numberhref="+375298296956" number="+375 (29) 829 69 56" />
          </li>
          <li className={style.phoneItem}>
            <Phone numberhref="+375162534895" number="+375 (16) 253 48 95" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
