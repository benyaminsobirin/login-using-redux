import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../types";

const initialState = {
  isLoggedIn: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
