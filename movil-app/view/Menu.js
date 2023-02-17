import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import FirabaseContext from "../context/firabaseContext";

const Menu = () => {
  const { menu, obtenerProductos } = useContext(FirabaseContext);

  useEffect(() => {
    obtenerProductos();
    console.log(menu);
  }, []);

  return <Text>Menu</Text>;
};

export default Menu;
