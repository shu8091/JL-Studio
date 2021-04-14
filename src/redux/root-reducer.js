import { combineReducers } from "redux";

import worksReducer from "./works/works.reducer";

export default combineReducers({
  works: worksReducer,
});
