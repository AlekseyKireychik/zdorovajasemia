import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
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
      <Header />
      <main>
        <Banner />
        <Greeting
          title={Store._state.pageHome.greeting.title}
          text={Store._state.pageHome.greeting.text}
        />
        <Advantages />
        <Specialists blok_id="specialist-home" />
        <Typesmassage />
        <News />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
