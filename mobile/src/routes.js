import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RoutesStack = createStackNavigator();

import Incidents from "./pages/Incidents";
import Detail from "./pages/Detail";

export default function Routes() {
  return (
    <NavigationContainer>
      <RoutesStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="DrawerMenu"
      >
        <RoutesStack.Screen name="Incidents" component={Incidents} />
        <RoutesStack.Screen name="Detail" component={Detail} />
      </RoutesStack.Navigator>
    </NavigationContainer>
  );
}
