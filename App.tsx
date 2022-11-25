import { StatusBar } from 'expo-status-bar';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { NativeBaseProvider } from "native-base";
import * as Font from 'expo-font';
import LoadingScreen from '@components/LoadingScreen';

import { THEME } from './src/theme';
import Routes from '@routes/index';

export default function App() {
  const [fontsLoaded] = Font.useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <LoadingScreen />}
    </NativeBaseProvider>
  );
}