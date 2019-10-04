import React from "react";
import Newspost from "./newspost/Newspost";
import style from "./News.module.css";

const News = props => {
  return (
    <section className={style.news}>
      <div className={style.container}>
        <h2 className={style.title}>Наши новости</h2>
        <a className={style.link} href="/">
          Посмотреть
        </a>
      </div>
      <ul className={style.container}>
        <Newspost
          link="/"
          image="../../images/massaz_osteopat.jpg"
          description="новость 01"
        />
        <Newspost
          link="/"
          image="../../images/massaz_osteopat.jpg"
          description="новость 02"
        />
        <Newspost
          link="/"
          image="../../images/massaz_osteopat.jpg"
          description="новость 03"
        />
      </ul>
    </section>
  );
};
export default News;
