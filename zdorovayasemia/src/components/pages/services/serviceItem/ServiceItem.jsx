import React from "react";
import Icon from "../../../icon/Icon";
import ServiceItemTitle from "../../services/serviceItem/serviceItemTitle/serviceItemTitle";
import style from "./ServiceItem.module.css";
const titleList = [
  "Консультация невролога",
  "Массаж детский(Общий)",
  "Оздоровительная гимнастика(для детей до года)",
  "Оздоровительная гимнастика(для детей от 4 до 10, от 10 до 15 лет)",
  "Массаж для взрослых",
  "Тейпирование",
  "Косметология"
];
let myTitleList = titleList.map(el => el);
const ServiceItem = props => {
  return (
    <li className={style.item}>
      <a className={style.link} href={props.href}>
        <Icon src="..//images/icons/checkbox.svg" width="35" />
        <ServiceItemTitle title={myTitleList} />
        <span className={style.linkHover}>{props.linkHoverName}</span>
      </a>
    </li>
  );
};

export default ServiceItem;
