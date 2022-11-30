import { Center, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Configurations() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Center flex={1}>
        <Text>Configuration Tab</Text>
      </Center>
    </SafeAreaView>
  )
}