import React from "react";
import Review from "./review/Review";
import Button from "../../../components/button/Button";
import Store from "../../../store";

const itemsReviews = Store._state.pageReviews.reiewsData.map((item, index) => {
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
const MyReviewContainer = props => {
  return (
    <React.Fragment>
      {itemsReviews}
      <Button
        children="Показать больше"
        type="button"
        onClick={() => {
          alert("Показать больше");
        }}
      />
    </React.Fragment>
  );
};
export default MyReviewContainer;
