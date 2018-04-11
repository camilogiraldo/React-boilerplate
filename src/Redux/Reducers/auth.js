import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  state: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TYPE:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
