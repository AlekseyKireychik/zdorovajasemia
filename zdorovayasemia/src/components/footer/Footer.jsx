import React from "react";
import Adress from "../adress/Adress";
import Phone from "../phone/Phone";
import Email from "../email/Email";
import Social from "../social/Social";
import Icon from "../icon/Icon";
import ComapanyName from "../companyName/CompanyName";
import style from "./Footer.module.css";

const Footer = props => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.adresslist}>
          <div className={style.adressItem}>
            <Icon src="/images/icons/location-pin.svg" alt="Адрес" />
            <Adress adress="г.Брест, ул.Орджоникидзе, 39" />            
          </div>
          <a href="https://yandex.by/maps/-/CKQJ6MKJ" >Посмотреть на карте</a>
        </div>
        <ul className={style.contactList}>
          <li className={style.contactItem}>
            <Icon
              src="/images/icons/mail.svg"
              alt="Почтовый адрес"
            />
            <Email email="zdorovayasemia@gmail.com" />
          </li>
          <li className={style.contactItem}>
            <Icon src="/images/icons/phone.svg" alt="Телефон" />
            <Phone numberhref="+375298296956" number="+375 (29) 829 69 56" />
          </li>
          <li className={style.contactItem}>
            <Icon src="/images/icons/phone.svg" alt="Телефон" />
            <Phone numberhref="+375162534895" number="+375 (16) 253 48 95" />
          </li>
        </ul>
        <ul className={style.socialList}>
          <li className={style.socialItem}>
            <Social link="#" linkImg="/images/icons/vk.svg" nameImg="vk" />
          </li>
          <li className={style.socialItem}>
            <Social
              link="#"
              linkImg="/images/icons/insta.svg"
              nameImg="instagram"
            />
          </li>
          <li className={style.socialItem}>
            <Social link="#" linkImg="/images/icons/ok.svg" nameImg="ok" />
          </li>
        </ul>
      </div>
      <div className={style.container}>
        <span className={style.copir}>
          &copy;
          <span>2019 </span>
          <ComapanyName title="Массажно-оздоровительный центр «Здоровая семья»" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
