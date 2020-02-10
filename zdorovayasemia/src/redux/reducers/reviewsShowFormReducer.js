import { SHOW_REVIEWS_FORM } from "../../constants";
let initioalState = { newMessadgeBody: "" };

const reviewsShowFormReducer = (
  state = initioalState,
  { id, isCompleted, type }
) => {
  switch (type) {
    case SHOW_REVIEWS_FORM:
      return [
        ...state,
        {
          id,
          isCompleted
        }
      ];
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SHOW_REVIEWS_FORM });
