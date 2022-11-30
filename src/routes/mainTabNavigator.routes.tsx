import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Configurations from "@screens/Configurations";
import Home from "@screens/Home";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Configurations"
        component={Configurations}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-settings" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}