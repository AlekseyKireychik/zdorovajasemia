import React from "react";
import Adress from "../adress/Adress";
import Phone from "../phone/Phone";
import Email from "../email/Email";
import Social from "../social/Social";
import Icon from "../icon/Icon";
import style from "./Footer.module.css";

const Footer = props => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.adresslist}>
          <span>Массажно-оздоровительный центр «Здоровая семья»</span>
          <Icon linkImg="/images/location-pin.svg" altText="Адрес" />  
          <Adress adress="г.Брест, ул.Орджоникидзе, 39" />
        </div>
        <ul className={style.contactList}>
          <li className={style.contactItem}>
            <Icon linkImg="/images/location-pin.svg" altText="Почтовый адрес" />  
            <Email email="zdorovayasemia@gmail.com" />
          </li>
          <li className={style.contactItem}>
            <Icon linkImg="/images/phone.svg" altText="Телефон" />
            <Phone numberhref="+375298296956" number="+375 (29) 829 69 56" />
          </li>
          <li className={style.contactItem}>
            <Icon linkImg="/images/phone.svg" altText="Телефон" />
            <Phone numberhref="+375162534895" number="+375 (16) 253 48 95" />
          </li>
        </ul>
        <ul className={style.socialList}>
          <li className={style.socialItem}>
            <Social link="#"  linkImg="#" nameImg="vk"/>
          </li>
          <li className={style.socialItem}>
            <Social link="#"  linkImg="#" nameImg="instagram"/>
          </li>
          <li className={style.socialItem}>
            <Social link="#"  linkImg="#" nameImg="odnoklassniki"/>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
