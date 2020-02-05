import React from "react";
import style from "./Home.module.css";
import Banner from "../../components/banner/Banner";
import Greeting from "../../components/greeting/Greeting";
import Advantages from "../../components/advantages/Advantages";
import Typesmassage from "../home/typesmassage/Typesmessage";
import Specialists from "../../components/specialists/Specialists";
import News from "../../components/news/News";
import Store from "../../store";

const Home = props => {
  return (
    <React.Fragment>
      <Banner />
      <Greeting
        title={Store.pageHome.greeting.title}
        text={Store.pageHome.greeting.text}
      />
      <Advantages />
      <Specialists />
      <Typesmassage />
      <News />
    </React.Fragment>
  );
};

export default Home;
