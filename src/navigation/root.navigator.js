import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppNavigator } from "./app.navigator";
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
