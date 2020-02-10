import { SHOW_REVIEWS_FORM } from "../../constants";
export default showReviewsForm = (id, isCompleted) => ({
  type: "SHOW_REVIEWS_FORM",
  id,
  isCompleted
});
