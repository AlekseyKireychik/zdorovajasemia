import React from "react";
import { NavLink } from "react-router-dom";
import Newspost from "./newspost/Newspost";
import style from "./News.module.css";

const News = props => {
  return (
    <section className={style.news}>
      <div className={style.container}>
        <h2 className={style.title}>Наши новости</h2>
        <NavLink className={style.link} to="blog">
          Посмотреть все
        </NavLink>
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
