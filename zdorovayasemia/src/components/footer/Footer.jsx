import React from "react";
import Adress from "../adress/Adress";
import Phone from "../phone/Phone";
import Email from "../email/Email";
import Social from "../social/Social";
import Icon from "../icon/Icon";
import style from "./Footer.module.css";
import {NavLink} from "react-router-dom";

const Footer = props => {
    return (
        <footer>
            <div className="container">
                <div className={style.footerContent}>
                    <div className={style.footerTop}>
                        <div className={style.adresslist}>
                            <div className={style.adressItem}>
                                <Icon src="/images/icons/location-pin.svg" alt="г.Брест, ул.Орджоникидзе, 39"/>
                                <Adress adress="г.Брест, ул.Орджоникидзе, 39"/>
                            </div>
                            <a href="https://yandex.by/maps/-/CKQJ6MKJ">Посмотреть на карте</a>
                        </div>
                        <ul className={style.contactList}>
                            <li className={style.contactItem}>
                                <Icon
                                    src="/images/icons/mail.svg"
                                    alt="Почтовый адрес"
                                />
                                <Email email="zdorovayasemia@gmail.com"/>
                            </li>
                            <li className={style.contactItem}>
                                <Icon src="/images/icons/phone.svg" alt="Телефон"/>
                                <Phone numberhref="+375298296956" number="+375 (29) 829 69 56"/>
                            </li>
                            <li className={style.contactItem}>
                                <Icon src="/images/icons/phone.svg" alt="Телефон"/>
                                <Phone numberhref="+375162534895" number="+375 (16) 253 48 95"/>
                            </li>
                        </ul>
                        <div className={style.socialBox}>
                            <span>Оставайтесь с нами:</span>
                            <Social/>
                        </div>
                    </div>
                    <ul className={style.footerNav}>
                        <li>
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName={style.active}>
                                О нас
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" activeClassName={style.active}>
                                Услуги
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" activeClassName={style.active}>
                                Продукты
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/team" activeClassName={style.active}>
                                Наша команда
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/reviews" activeClassName={style.active}>
                                Отзывы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeClassName={style.active}>
                                Блог
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" activeClassName={style.active}>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                    <div className="container">
                        <span className={style.copir}>&copy; <span>2019 </span><span>Массажно-оздоровительный центр «Здоровая семья»</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
