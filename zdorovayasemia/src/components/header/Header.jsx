import React, { Component } from "react";
import Logo from "../logo/Logo";
import Adress from "../adress/Adress";
import Phone from "../phone/Phone";
import Navigation from "../navigation/Navigation";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.headerNav}>
        <div className={style.headerTop}>
          <Logo />
         {/* <span className={style.headerZD}>zdsemia</span>  */}
          <div className={style.headerContacts}>
            <div className={style.adress}>
              <Adress adress="г.Брест, ул.Орджоникидзе, 39" />
            </div>
            <ul className={style.phoneList}>
              <li className={style.phoneItem}>
                <Phone
                  numberhref="+375298296956"
                  number="+375 (29) 829 69 56"
                />
              </li>
              <li className={style.phoneItem}>
                <Phone
                  numberhref="+375162534895"
                  number="+375 (16) 253 48 95"
                />
              </li>
            </ul>
          </div>
        </div>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
