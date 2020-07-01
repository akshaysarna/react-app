import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form";

import AuthReducers from "./AuthReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: AuthReducers,
  form: formReducer,
  streams: streamReducer
});
