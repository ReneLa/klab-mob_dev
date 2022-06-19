import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "../screens/onboard";
import { MainNavigator } from "./main.navigator";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShow: false }} headerMode="none">
      <Stack.Screen name="on_board" component={OnBoardScreen} />
      <Stack.Screen name="main" component={MainNavigator} />
    </Stack.Navigator>
  );
};
