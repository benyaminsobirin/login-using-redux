import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../types";

const initialState = {
  users: [],
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
