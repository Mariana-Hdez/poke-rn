import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/screens/Home";
import DetailScreen from "@/screens/Detail";

export type RootStackParamList = {
  Home: undefined; // La pantalla Home no recibe parámetros
  Detail: { name: string }; // La pantalla Detail recibe el nombre del Pokémon
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    // NavigationContainer envuelve toda la navegación de la aplicación
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Pokédex" }}
        />
        {/* Pantalla Detail: muestra información detallada de un Pokémon */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Detalle del Pokémon" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
