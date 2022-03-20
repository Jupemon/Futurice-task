import { combineReducers } from "redux";
import images from "./images";
import error from "./error";

export const rootReducer = combineReducers({
  images,
  error,
});
