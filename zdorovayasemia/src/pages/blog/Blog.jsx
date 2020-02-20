import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import Blogpost from "../blog/blogpost/Blogpost";
import Store from "../../store";
import style from "./Blog.module.css";

const Blog = props => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <InnerBanner
          bgimage={Store._state.pageBlog.info.background}
          children={Store._state.pageBlog.info.title}
        />
        <div className={style.container}>
          <Blogpost width="300" height="300" children="Подробнее" />
          <Blogpost width="300" height="300" children="Подробнее" />
          <Blogpost width="300" height="300" children="Подробнее" />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};
export default Blog;
