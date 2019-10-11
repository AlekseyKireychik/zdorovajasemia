import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import style from "./Products.module.css";

const Products = props => {
  return (
    <div>
      <InnerBanner bgimage="..//images/product.jpg" children="Продукты" />
      <div className={style.container}>
        <h2>Продукты</h2>
      </div>
    </div>
  );
};

export default Products;
