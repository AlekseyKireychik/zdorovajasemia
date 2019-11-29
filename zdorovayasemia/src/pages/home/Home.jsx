import React from "react";
import style from "./Home.module.css";
import Banner from "../../components/banner/Banner";
import Greeting from "../../components/greeting/Greeting";
import Advantages from "../../components/advantages/Advantages";
import Typesmassage from "../home/typesmassage/Typesmessage";
import Specialists from "../../components/specialists/Specialists";
import News from "../../components/news/News";

const Home = props => {
  return (
    <React.Fragment>
      <Banner />
      <Greeting
        title="Массажно-оздоровительный центр «Здоровая семья»!"
        text="Мы рады приветствовать Вас.
        Можем предложить широкий ряд видов массажа для взрослых,
         специалисты центра «Здоровая Семья» владеют современными методиками реабилитации детей первого года жизни и старше, 
        совершенствуют своё мастерство, посещают курсы и семинары в Беларуси, России, Польше .
         Записавшись на детский массаж, вы получите ценные советы как заниматься с ребёнком на поверхности и на мяче дома."
      />
      <Advantages />
      <Specialists />
      <Typesmassage />
      <News />
    </React.Fragment>
  );
};

export default Home;