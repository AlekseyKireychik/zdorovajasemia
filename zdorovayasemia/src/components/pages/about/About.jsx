import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Icon from "../../icon/Icon";
import Store from "../../../store";
import style from "./About.module.css";

const About = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage={Store.pageAbout.info.background}
        children={Store.pageAbout.info.title}
      />
      <div className={style.container}>
        <h2>{Store.pageAbout.greeting.title}</h2>
        <p>{Store.pageAbout.greeting.subTitle}</p>
        <section className={style.item}>
          <div className={style.wrapText}>
            <h3>Для детей:</h3>
            <ul>
              <li>
                <Icon
                  width="40px"
                  alt="icon-ok"
                  src="..//images/icons/icon-ok.svg"
                />
                Лечебный и профилактический массаж (с 2-х месяцев)
              </li>
              <li>
                <Icon
                  width="40px"
                  alt="icon-ok"
                  src="..//images/icons/icon-ok.svg"
                />
                Оздоровительная гимнастика
              </li>
              <li>
                <Icon
                  width="40px"
                  alt="icon-ok"
                  src="..//images/icons/icon-ok.svg"
                />
                Невролог
              </li>
              <li>
                <Icon
                  width="40px"
                  alt="icon-ok"
                  src="..//images/icons/icon-ok.svg"
                />
                Тейпирование
              </li>
              <li>
                <Icon
                  width="40px"
                  alt="icon-ok"
                  src="..//images/icons/icon-ok.svg"
                />
                Массажные коврики, стельки, подушки для новорожденных
              </li>
            </ul>
          </div>
          <div className={style.wrapImg}>
            <img src="..//images/fotobaby.jpg" alt="" />
          </div>
        </section>
        <section className={style.item}>
          <div className={style.wrapImg}>
            <img src="..//images/massaz_osteopat.jpg" alt="" />
          </div>
          <div className={style.wrapText}>
            <h3>Для взрослых:</h3>
            <ul>
              <li>
                <Icon
                  width="40px"
                  alt="icon-ok"
                  src="..//images/icons/icon-ok.svg"
                />
                Лечебный, профилактический, антицеллюлитный, фитнес-формирующий,
                массаж лица, общий, массаж бамбуковыми палочками, арома-массаж,
              </li>
              <li>
                <Icon
                  width="40px"
                  alt="icon-ok"
                  src="..//images/icons/icon-ok.svg"
                />
                "Антистресс" и др.
              </li>
              <li>
                <Icon
                  width="40px"
                  alt="icon-ok"
                  src="..//images/icons/icon-ok.svg"
                />
                Тейпирование
              </li>
              <li>
                <Icon
                  width="40px"
                  alt="icon-ok"
                  src="..//images/icons/icon-ok.svg"
                />
                Подарочные сертификаты (на сумму, по программе, индивидуальная
                разработка программы)
              </li>
            </ul>
          </div>
        </section>
        <p>{Store.pageAbout.greeting.resume}</p>
      </div>
    </React.Fragment>
  );
};
export default About;
