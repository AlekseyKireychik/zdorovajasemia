import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import GiveFetback from "./giveFetback/GiveFetback";
import Form from "./form/Form";
import Review from "./review/Review";
import Store from "../../../store";
import style from "./Reviews.module.css";

const itemsReviews = Store.pageReviews.reiewsData.map(item => {
  return (
    <Review
      key={item.id}
      date={item.date}
      name={item.name}
      title={item.title}
      text={item.text}
    />
  );
});

const Reviews = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage={Store.pageReviews.info.background}
        children={Store.pageReviews.info.title}
      />
      <div className={style.container}>
        <GiveFetback
          title={Store.pageReviews.giveFetback.title}
          subTitle={Store.pageReviews.giveFetback.subTitle}
          children={Store.pageReviews.giveFetback.buttonName}
        />
        <div className={style.wrapForm}>
          <Form />
        </div>
        {itemsReviews}
      </div>
    </React.Fragment>
  );
};

export default Reviews;
