const ADD_NEW_REVIEW = "ADD_NEW_REVIEW";
let initioalState = { newMessadgeBody: "" };

const reviewsReducer = (state = initioalState, action) => {
  switch (action.type) {
    case ADD_NEW_REVIEW:
      state.newMessadgeBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: ADD_NEW_REVIEW });
