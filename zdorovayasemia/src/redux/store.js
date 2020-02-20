import { createStore, compose } from "redux";
import rootReducer from "./reducers/index";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

// let reducers = combineReducers({
//   pageHome: homeReducer,
//   pageAbout: aboutReducer,
//   pageBlog: blogReducer,
//   pageContacts: contactsReducer,
//   pageProducts: productsReducer,
//   pageReviews: reviewsReducer,
//   pageServices: servicesReducer,
//   pageTeam: teamReducer
// });

// let store = createStore(reducers);

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, composeEnhancers());

const store = configureStore({});

export default store;
