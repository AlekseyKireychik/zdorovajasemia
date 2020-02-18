let initioalState = {
};

const addReviewsFormData = (state = initioalState, action) => {
  switch (action.type) {
    case ADD_REVIEWS_FORM_DATA:
      return [...state,
      {
        id: action.id,
        date: action.date,
        name: action.name,
        stars: action.stars,
        title: action.title,
        text: action.text
      }];
    default:
      return state;
  }
};

export const addReviewsFormData;
