import React from "react";
import Logo from "../logo/Logo";
import Phone from "../phone/Phone";
import Navigation from "../navigation/Navigation";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.headerNav}>
        <Logo />
        <div className={style.headerTop}>
          <div className={style.headerContacts}>
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
          <Navigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;
