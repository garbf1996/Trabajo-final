import React from "react";
import { Text } from "react-native";
//importacion de react native
import { StyleSheet, View, Button } from "react-native";
//importacion de react native base

const NuevaOrden = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Nueva Orden</Text>
      <Button title='Ir a Menu' />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FFDA00",
  },
  titulo: {
    color: "#000",
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default NuevaOrden;
