const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

let initioalState = { newMessadgeBody: "" };

const contactsReducer = (state = initioalState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      state.newMessadgeBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: ADD_NEW_MESSAGE });
