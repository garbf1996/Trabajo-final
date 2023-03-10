import React, { useContext, useEffect, useState } from "react";
//selecionar la cantidad de platillos
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import PedidosContext from "../pedidos/PedidosContext";

import { useNavigation } from "@react-navigation/native";

const FormularioPlatillo = () => {
  const navigation = useNavigation();

  //state para la cantidad de platillos
  const [cantidad, guardarCantidad] = useState(1);

  // total a pagar por la cantidad de platillos
  const [total, guardarTotal] = useState(1);

  //context de pedidos
  const { platillo, confirmOrder } = useContext(PedidosContext);

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

  //Confirmar la orden

  const confirmarOrden = () => {
    Alert.alert(
      "Deseas confirmar tu pedido?",
      "Un pedido confirmado ya no se podra modificar",
      [
        {
          text: "Confirmar",
          onPress: () => {
            const pedido = {
              ...platillo,
              cantidad,
              total,
            };
            confirmOrder(pedido);

            //redireccionar
            navigation.navigate("ResumenPedido");
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
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
          value={cantidad.toString()}
        />
        <Button title='+' onPress={() => incrementar()} />
      </View>
      <Text style={styles.texto}>Total a Pagar: $ {total}</Text>

      <Button title='Ordenar Platillo' onPress={() => confirmarOrden()} />
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

export default FormularioPlatillo;
