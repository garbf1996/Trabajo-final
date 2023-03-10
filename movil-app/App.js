import React from "react";
//navigation
import { NavigationContainer } from "@react-navigation/native";

//react native stack
import { createStackNavigator } from "@react-navigation/stack";
import ResumenPedido from "./view/ResumenPedido";
import NuevaOrden from "./view/NuevaOrden";
import DetallePlatillo from "./view/DetallePlatillo";
import Menu from "./view/Menu";
import FirabaseStates from "./context/firabaseStates";
import PedidosState from "./pedidos/PedidosState";
import FormularioPlatillo from "./view/FormularioPlatillo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <FirabaseStates>
        <PedidosState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#FFDA00",
                },
                headerTintColor: "#000",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            >
              <Stack.Screen
                name='NuevaOrden'
                component={NuevaOrden}
                options={{ title: "Nueva Orden" }}
              />
              <Stack.Screen
                name='Menu'
                component={Menu}
                options={{ title: "Menu" }}
              />
              <Stack.Screen
                name='DetallePlatillo'
                component={DetallePlatillo}
                options={{ title: "Detalle Platillo" }}
              />
              <Stack.Screen
                name='ResumenPedido'
                component={ResumenPedido}
                options={{ title: "Resumen Pedido" }}
              />
              <Stack.Screen
                name='FormularioPlatillo'
                component={FormularioPlatillo}
                options={{ title: "Formulario Platillo" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidosState>
      </FirabaseStates>
    </>
  );
}
