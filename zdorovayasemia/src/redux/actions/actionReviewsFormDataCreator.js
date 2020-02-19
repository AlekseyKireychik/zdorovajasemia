import { ADD_REVIEWS_FORM_DATA } from "../../constants";
export const addReviewsFormData = (id, date, name, stars, title, text) => ({
  type: ADD_REVIEWS_FORM_DATA,
  id,
  date,
  name,
  stars,
  title,
  text
});
