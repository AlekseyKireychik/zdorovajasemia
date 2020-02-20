import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import MyReviewContainer from "./MyReviewContainer/MyReviewContainer";
import ReviewFormContainer from "./ReviewFormContainer/ReviewFormContainer";
import Store from "../../store";
import style from "./Reviews.module.css";
const Reviews = props => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <InnerBanner
          bgimage={Store._state.pageReviews.info.background}
          children={Store._state.pageReviews.info.title}
        />
        <div className={style.container}>
          <MyReviewContainer />
          <ReviewFormContainer />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Reviews;
