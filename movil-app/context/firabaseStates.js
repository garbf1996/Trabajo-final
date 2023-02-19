import React from "react";

import { useReducer } from "react";
import FirabaseContext from "./firabaseContext";
import FirebaseReducer from "./firabaseReducer";

import firebaseAPP from "../firebase";
import { OBTERNER_PRODUCTOS } from "../types";

const FirabaseStates = (props) => {
  const initialState = {
    menu: [],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const obtenerProductos = () => {
    dispatch({
      type: OBTERNER_PRODUCTOS,
    });
    firebaseAPP.db.collection("productos").onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let platillos = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      dispatch({
        type: OBTERNER_PRODUCTOS,
        payload: platillos,
      });
    }
  };

  return (
    <FirabaseContext.Provider
      value={{
        menu: state.menu,

        firebaseAPP,
        obtenerProductos,
      }}
    >
      {
        //props.children is the content of the component
        props.children
      }
    </FirabaseContext.Provider>
  );
};

export default FirabaseStates;
