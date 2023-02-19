import React from "react";

import { useReducer } from "react";
import PedidosReducer from "./PedidosReducer";
import PedidosContext from "./PedidosContext";
import { SELECCIONAR_PRODUCTO } from "../types";

const PedidosState = (props) => {
  const initialState = {
    pedido: [],
    platillo: null,
  };

  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  //SELECT PRODUCT
  const selectProduct = (platillo) => {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: platillo,
    });
  };

  return (
    <PedidosContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        selectProduct,
      }}
    >
      {
        //props.children is the content of the component
        props.children
      }
    </PedidosContext.Provider>
  );
};

export default PedidosState;
