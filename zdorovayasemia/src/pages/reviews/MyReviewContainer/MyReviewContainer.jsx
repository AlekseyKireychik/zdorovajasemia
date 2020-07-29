// import React from "react";
// import Review from "./review/Review";
// import Button from "../../../components/button/Button";
// import Store from "store";
// let initialState = {
//   reviewSize: 3,
// };
// const itemsReviews = Store.initialState._state.pageReviews.reiewsData.map( item => {
//     if (item.id <= initialState.reviewSize) {
//       return (
//         <Review
//           key={item.id}
//           date={item.date}
//           name={item.name}
//           title={item.title}
//           text={item.text}
//         />
//       );
//     }
//   }
// );

// let onSchowMoreReviw = () => {
//   console.log(initialState.reviewSize);
// };
// console.log(itemsReviews);
// const MyReviewContainer = (props) => {
//   return (
//     <React.Fragment>
//       {itemsReviews}
//       <Button
//         children="Показать больше"
//         type="button"
//         onClick={onSchowMoreReviw}
//       />
//     </React.Fragment>
//   );
// };
// export default MyReviewContainer;
