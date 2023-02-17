import { useReducer } from "react";
import { OBTERNER_PRODUCTOS } from "../types";

const FirebaseReducer = (state, action) => {
  switch (action.type) {
    case OBTERNER_PRODUCTOS:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};

export default FirebaseReducer;
