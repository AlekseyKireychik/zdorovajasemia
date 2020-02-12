import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import GiveFetback from "./giveFetback/GiveFetback";
import Form from "./form/Form";
import Review from "./review/Review";
import Store from "../../store";
import style from "./Reviews.module.css";

const itemsReviews = Store._state.pageReviews.reiewsData.map(item => {
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
let state = {
  FormCallState: false
};
let onSchowReviewsForm = () => {
  return (state.FormCallState = false);
};
console.log(state);

const Reviews = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage={Store._state.pageReviews.info.background}
        children={Store._state.pageReviews.info.title}
      />
      <div className={style.container}>
        {state.FormCallState ? (
          <div className={style.wrapForm}>
            <Form />
          </div>
        ) : null}

        {itemsReviews}
        <GiveFetback
          title={Store._state.pageReviews.giveFetback.title}
          subTitle={Store._state.pageReviews.giveFetback.subTitle}
          children={Store._state.pageReviews.giveFetback.buttonName}
          onClick={onSchowReviewsForm}
        />
      </div>
    </React.Fragment>
  );
};

export default Reviews;
