import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabNavigator } from './mainTabNavigator.routes';

type AppRoutes = {
  MainTabNavigator: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const Stack = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
    </Stack.Navigator>
  )
}