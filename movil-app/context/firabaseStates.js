import React from "react";

import { useReducer } from "react";
import FirabaseContext from "./firabaseContext";
import FirebaseReducer from "./firabaseReducer";

import firebaseAPP from "../firebase";

const FirabaseStates = (props) => {
  const initialState = {
    menu: [],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  return (
    <FirabaseContext.Provider
      value={{
        menu: state.menu,

        firebaseAPP,
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
