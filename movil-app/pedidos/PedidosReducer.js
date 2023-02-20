import { useReducer } from "react";
import { SELECCIONAR_PRODUCTO, CONFIRMAR_PEDIDO } from "../types";

const PedidosReducer = (state, action) => {
  switch (action.type) {
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        platillo: action.payload,
      };
    case CONFIRMAR_PEDIDO:
      return {
        ...state,
        pedido: [...state.pedido, action.payload],
      };
    default:
      return state;
  }
};

export default PedidosReducer;
