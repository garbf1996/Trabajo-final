import React, { useContext, useEffect, useState } from "react";
//selecionar la cantidad de platillos
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import PedidosContext from "../pedidos/PedidosContext";

const FormularioPlatillo = () => {
  //state para la cantidad de platillos
  const [cantidad, guardarCantidad] = useState(1);

  // total a pagar por la cantidad de platillos
  const [total, guardarTotal] = useState(0);

  //context de pedidos
  const { platillo } = useContext(PedidosContext);

  const { precio } = platillo;

  useEffect(() => {
    calcularTotal();
  }, [cantidad]);

  const calcularTotal = () => {
    const totalPagar = precio * cantidad;
    guardarTotal(totalPagar);
  };

  //funcion de autoincremento
  const incrementar = () => {
    guardarCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      guardarCantidad(cantidad - 1);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Cantidad Platillos</Text>
      <Text style={styles.texto}>Cantidad</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button title='-' onPress={() => decrementar()} />
        <TextInput
          style={styles.input}
          onChangeText={(cantidad) => guardarCantidad(cantidad)}
          value={cantidad}
        />
        <Button title='+' onPress={() => incrementar()} />
      </View>
      <Text style={styles.texto}>Total a Pagar: $ {total}</Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default FormularioPlatillo;
