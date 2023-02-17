import React from "react";

import { useReducer } from "react";
import PedidosReducer from "./PedidosReducer";
import PedidosContext from "./PedidosContext";

const PedidosState = (props) => {
  const initialState = {
    pedido: [],
  };

  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  return (
    <PedidosContext.Provider
      value={{
        pedido: state.pedido,
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
