import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Configurations from "@screens/Configurations";
import Home from "@screens/Home";

type MainTabNavigatorRoutes = {
  Home: undefined;
  Configurations: undefined;
}

const Tab = createBottomTabNavigator<MainTabNavigatorRoutes>();

export function MainTabNavigator({ }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Tasks',
          tabBarLabel: 'Tasks',
        }}
      />
      <Tab.Screen
        name="Configurations"
        component={Configurations}
      />
    </Tab.Navigator>
  )
}