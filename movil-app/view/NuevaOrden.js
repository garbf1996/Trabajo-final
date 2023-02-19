import React from "react";
//importacion de react native
import { StyleSheet, View, Button, Text } from "react-native";
//importacion de react native base
//useNavigation nos permite navegar entre pantallas
import { useNavigation } from "@react-navigation/native";

const NuevaOrden = () => {
  //utilizar useNavigation
  const navigation = useNavigation();
  return (
    <View style={styles.contenedor}>
      <Button title='Nueva Orden' onPress={() => navigation.navigate("Menu")} />
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
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default NuevaOrden;
