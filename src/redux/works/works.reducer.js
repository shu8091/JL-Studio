import { WorksActionTypes } from "./works.types";

const INITIAL_STATE = {
  hidden: false,
};

const worksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorksActionTypes.TOGGLE_POPUP_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default worksReducer;
