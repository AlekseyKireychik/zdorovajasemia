import { combineReducers } from "redux";
import reviewsShowFormReducer from "./reducers/reviewsReducer";
const rootReducer = combineReducers({ reviewsShowFormReducer });
export default rootReducer;
