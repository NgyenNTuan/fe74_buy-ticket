import { combineReducers } from "redux";
import userReducer from "./../components/duck/reducer";

const rootReducer = combineReducers({
   userReducer,
});

export { rootReducer };
