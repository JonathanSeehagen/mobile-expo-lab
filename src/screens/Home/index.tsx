import { Box, Text } from "native-base";

function TaskCard() {
  return (
    <Box h={20} w="100%" bg='blue.100' borderRadius={10}>
      <Text>Description</Text>
    </Box>
  )
}

export default function Home() {
  return (
    <Box flex={1} p={3} alignItems="center" bg='info.600'>
      <TaskCard />
    </Box>
  )
}