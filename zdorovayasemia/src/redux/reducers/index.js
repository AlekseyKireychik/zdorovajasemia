import {combineReducers} from "redux";
// import addReviewsFormData from "./reviewsFormReducer";
import auth from "./auth";

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;
