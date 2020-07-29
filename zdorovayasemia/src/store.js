import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from "./redux/reducers/index";

// /* eslint-disable no-underscore-dangle */
// const composeEnhancers =
//   process.env.NODE_ENV !== "production" &&
//   typeof window === "object" &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;
// /* eslint-enable */

// let reducers = combineReducers({
//   pageHome: homeReducer,
//   // pageAbout: aboutReducer,
//   // pageBlog: blogReducer,
//   // pageContacts: contactsReducer,
//   // pageProducts: productsReducer,
//   // pageReviews: reviewsReducer,
//   pageServices: servicesReducer,
//   // pageTeam: teamReducer
// });

const initialState = {};

const store = createStore(rootReducer, initialState, compose(
    // applyMiddleware(logger, thunk),
    applyMiddleware(thunk),
));

export default store;


