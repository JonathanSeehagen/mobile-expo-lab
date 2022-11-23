import { Box, Button, Text } from "native-base";

interface TaskCardProps {
  description: string;
  priority: number;
  last_update: Date;
}

function TaskCard({
  description,
  priority,
  last_update,
}: TaskCardProps) {
  return (
    <Button
      h='100px'
      w="100%"
      bg='blue.100'
      marginBottom='10px'
      justifyContent='space-around'
      p={2}
    >
      <Box flex={1} flexGrow={1}>
        <Text fontFamily='heading' fontSize='md'>
          11111111111111111111111222222222222222222222222233333333333333333334444444444444444444444555555555555555555
        </Text>
      </Box>
      <Box flexDirection='row' justifyContent='space-between'>
        <Text
          color='gray.300'
          fontFamily='body'
          fontSize='xs'
        >
          Priority: High
        </Text>
        <Text
          color='gray.300'
          fontFamily='body'
          fontSize='xs'
        >
          Last Update: 23/11/2022 -17:36h
        </Text>
      </Box>
    </Button>
  )
}

export default function Home() {
  return (
    <Box flex={1} p={3} alignItems="center" bg='info.600'>
      <TaskCard
        description=""
        priority={0}
        last_update={new Date()}
      />

      <TaskCard
        description=""
        priority={0}
        last_update={new Date()}
      />

      <TaskCard
        description=""
        priority={0}
        last_update={new Date()}
      />

      <TaskCard
        description=""
        priority={0}
        last_update={new Date()}
      />
    </Box>
  )
}