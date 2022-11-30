import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRoutes } from "./app.routes";

export default function Routes() {
  return (
    <SafeAreaProvider style={{ backgroundColor: 'transparent' }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}