import React from "react";

import { useReducer } from "react";
import FirabaseContext from "./FirabaseContext";
import FirebaseReducer from "./FirabaseReducer";

const firabaseStates = (props) => {
  const initialState = {
    menu: [],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  return (
    <FirabaseContext.Provider
      value={{
        menu: state.menu,
      }}
    >
      {
        //props.children is the content of the component
        props.children
      }
    </FirabaseContext.Provider>
  );
};

export default firabaseStates;
