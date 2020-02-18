import { ADD_DATA_REVIEWS_FORM } from "../../constants";
export default addDateReviewsForm = (id, date, name, stars, title, text) => ({
  type: "ADD_DATA_REVIEWS_FORM",
  id,
  date,
  name,
  stars,
  title,
  text
});
