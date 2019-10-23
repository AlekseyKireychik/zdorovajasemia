import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Store from "../../../store";
import style from "./About.module.css";



const About = props => {
  return (
    <React.Fragment>
      <InnerBanner bgimage={Store.pageAbout.info.background} 
      children={Store.pageAbout.info.title} />
      <div className={style.container}>
        <h2>{Store.pageAbout.greeting.title}</h2>
        <p>{Store.pageAbout.greeting.subTitle}</p>
        <section>
          <div className={style.wrap}>
            <h3>Для детей:</h3>
            <ul>
              <li>Лечебный и профилактический массаж (с 2-х месяцев)</li>
              <li>Оздоровительная гимнастика</li>
              <li>Невролог</li>
              <li>Тейпирование</li>
              <li>Массажные коврики, стельки, подушки для новорожденных</li>
            </ul>
          </div>
          <div><img src="..//images/fotobaby.jpg" alt=""/></div>
        </section>
        <section>
        <div><img src="..//images/massaz_osteopat.jpg" alt=""/></div>
        <h3>Для взрослых:</h3>
        <ul>          
          <li>
            Лечебный, профилактический, антицеллюлитный, фитнес-формирующий,
            массаж лица, общий, массаж бамбуковыми палочками, арома-массаж,
          </li>
          <li> "Антистресс" и др.</li>
          <li>Тейпирование</li>
          <li>
            Подарочные сертификаты (на сумму, по программе, индивидуальная
            разработка программы)
          </li>
        </ul>
        </section>
        <p>{Store.pageAbout.greeting.resume}</p>
      </div>
    </React.Fragment>
  );
};
export default About;
