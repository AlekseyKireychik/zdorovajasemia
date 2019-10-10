import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Image from "../../image/Image";
import style from "./Blog.module.css";

const Blog = props => {
  return (
    <div>
      <InnerBanner bgimage="..//images/blog.jpeg" children="Blog" />
    </div>
  );
};
export default Blog;
