import { combineReducers } from "redux";
import courseReducer from "../reducer/course/courseReducer";

const rootReducer = combineReducers({
  courses: courseReducer
});

export default rootReducer;
