import { useReducer } from "react";
import { SELECCIONAR_PRODUCTO } from "../types";

const PedidosReducer = (state, action) => {
  switch (action.type) {
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        platillo: action.payload,
      };
    default:
      return state;
  }
};

export default PedidosReducer;
