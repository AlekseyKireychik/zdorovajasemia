const SHOW = "SHOW";
const DT_SHOW = "DT_SHOW";

let initioalState = {
  reviewsFormShow: false
};

const reviewsFormReducer = (state = initioalState, action) => {
  switch (action.type) {
    case SHOW:
      return state;
    case DT_SHOW:
      return state;
    default:
      return state;
  }
};

export const reviewsFormShowActionCreator = formId => ({ type: SHOW, formId });
export const reviewsFormDtShowActionCreator = formId => ({
  type: DT_SHOW,
  formId
});
