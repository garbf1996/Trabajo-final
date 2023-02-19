import React, { useContext } from "react";
import { Text } from "react-native";
import PedidosContext from "../pedidos/PedidosContext";

import { FlatList, StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DetallePlatillo = () => {
  const { platillo } = useContext(PedidosContext);

  //USER NAVIGETOR
  const navigation = useNavigation();

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Detalle Platillo</Text>
      <Text style={styles.texto}>Nombre: {platillo.nombre}</Text>
      <Text style={styles.texto}>Precio: {platillo.precio}</Text>
      <Text style={styles.texto}>Categoria: {platillo.categoria}</Text>
      <Text style={styles.texto}>Descripcion: {platillo.descripcion}</Text>
      <Button
        title='Ordenar Platillo'
        onPress={() => {
          navigation.navigate("FormularioPlatillo");
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

export default DetallePlatillo;
