import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Blogpost from "../blog/blogpost/Blogpost";
import style from "./Blog.module.css";

const Blog = props => {
  return (
    <React.Fragment>
      <InnerBanner bgimage="..//images/blog.jpeg" children="Блог" />
      <div className={style.container}>        
        <Blogpost width="300" height="300" children="Подробнее" />
        <Blogpost width="300" height="300" children="Подробнее" />
        <Blogpost width="300" height="300" children="Подробнее" />
      </div>
    </React.Fragment>
  );
};
export default Blog;
