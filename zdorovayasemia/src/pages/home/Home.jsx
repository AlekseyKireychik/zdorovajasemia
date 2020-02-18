import React from "react";
import Banner from "./banner/Banner";
import Greeting from "./greeting/Greeting";
import Advantages from "./advantages/Advantages";
import Typesmassage from "../home/typesmassage/Typesmessage";
import Specialists from "../../components/specialists/Specialists";
import News from "../../components/news/News";
import Store from "../../store";

const Home = props => {
  return (
    <React.Fragment>
      <Banner />
      <Greeting
        title={Store._state.pageHome.greeting.title}
        text={Store._state.pageHome.greeting.text}
      />
      <Advantages />
      <Specialists blok_id="specialist-home" />
      <Typesmassage />
      <News />
    </React.Fragment>
  );
};

export default Home;
