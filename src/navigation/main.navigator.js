import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Settings from "../screens/settings";
import Consult from "../screens/consult";
import Science from "../screens/science";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShow: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Consult" component={Consult} />
      <Tab.Screen name="Science" component={Science} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
