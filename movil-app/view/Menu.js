import React, { useContext, useEffect } from "react";
import FirabaseContext from "../context/firabaseContext";

//Recat native list de platillos
import { FlatList, StyleSheet, View, Text } from "react-native";

const Menu = () => {
  const { menu, obtenerProductos } = useContext(FirabaseContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(platillo) => platillo.id}
        renderItem={({ item }) => {
          return (
            <Text note style={styles.texto}>
              {item.nombre} - Precio: {item.precio} - Categoria:{" "}
              {item.categoria} - Descripcion: {item.descripcion}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  titulo: {
    color: "#000",
    marginTop: 40,
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  texto: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Menu;
