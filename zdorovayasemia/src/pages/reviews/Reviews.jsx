import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import MyReviewContainer from "./MyReviewContainer/MyReviewContainer";
import ReviewFormContainer from "./ReviewFormContainer/ReviewFormContainer";
import Store from "../../store";
import style from "./Reviews.module.css";
const Reviews = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage={Store._state.pageReviews.info.background}
        children={Store._state.pageReviews.info.title}
      />
      <div className={style.container}>
        <MyReviewContainer />
        <ReviewFormContainer />
      </div>
    </React.Fragment>
  );
};

export default Reviews;
