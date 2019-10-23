import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Blogpost from "../blog/blogpost/Blogpost";
import Store from "../../../store";
import style from "./Blog.module.css";

const Blog = props => {
  return (
    <React.Fragment>
      <InnerBanner 
      bgimage={Store.pageBlog.info.background} 
      children={Store.pageBlog.info.title} 
      />
      <div className={style.container}>        
        <Blogpost width="300" height="300" children="Подробнее" />
        <Blogpost width="300" height="300" children="Подробнее" />
        <Blogpost width="300" height="300" children="Подробнее" />
      </div>
    </React.Fragment>
  );
};
export default Blog;
