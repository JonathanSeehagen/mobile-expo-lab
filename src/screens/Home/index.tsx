import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge, Box, FlatList, HStack, Pressable, Spacer, Text } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';

interface TaskCardProps {
  id: string;
  description: string;
  priority: number;
  last_update: Date;
}

interface PriorityBadgeProps {
  priority: number;
}

export function dataHourToDateTimeString(data: Date): string {
  return format(new Date(data), 'dd/MM/yy - HH:mm', { locale: ptBR })
}

function PriorityBagde({ priority }: PriorityBadgeProps) {
  switch (priority) {
    case 2:
      return (
        <Badge colorScheme='warning' _text={{ color: 'white' }} variant="solid" rounded="4">
          Medium
        </Badge>
      )
    case 3:
      return (
        <Badge colorScheme='error' _text={{ color: 'white' }} variant="solid" rounded="4">
          High
        </Badge>
      )
    default:
      return (
        <Badge colorScheme='success' _text={{ color: 'white' }} variant="solid" rounded="4">
          Normal
        </Badge>
      )
  }
}

function TaskCard({
  id,
  description,
  priority,
  last_update,
}: TaskCardProps) {
  return (
    <Pressable
      onPress={() => console.log(id)}
      mb={3}
    >
      {({
        isHovered,
        isPressed
      }) => {
        return (
          <Box
            bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"}
            p="3"
            rounded="5"
            shadow={1}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <Text
              fontFamily="description"
              color="coolGray.800"
              fontWeight="medium"
              fontSize="md"
              mb={3}
            >
              {description}
            </Text>
            <HStack alignItems="flex-end">
              <PriorityBagde priority={priority} />
              <Spacer />
              <Text fontSize={12} color="coolGray.800">
                Last Update: {dataHourToDateTimeString(last_update)}h
              </Text>
            </HStack>
          </Box>
        )
      }}
    </Pressable>
  )
}

export default function Home() {
  const data: TaskCardProps[] = [
    {
      id: '1',
      description: "Retirar o Lixo",
      priority: 1,
      last_update: new Date()
    },
    {
      id: '2',
      description: "Lavar Louça",
      priority: 2,
      last_update: new Date()
    },
    {
      id: '3',
      description: "Task 3",
      priority: 3,
      last_update: new Date()
    },
    {
      id: '4',
      description: "Task 1",
      priority: 1,
      last_update: new Date()
    },
    {
      id: '5',
      description: "Task 2",
      priority: 2,
      last_update: new Date()
    },
    {
      id: '6',
      description: "Task 3",
      priority: 3,
      last_update: new Date()
    },
    {
      id: '7',
      description: "Task 1",
      priority: 1,
      last_update: new Date()
    },
    {
      id: '8',
      description: "Task 2",
      priority: 2,
      last_update: new Date()
    },
    {
      id: '9',
      description: "Task 3",
      priority: 3,
      last_update: new Date()
    },
    {
      id: '10',
      description: "Task 1",
      priority: 1,
      last_update: new Date()
    },
    {
      id: '11',
      description: "Task 2",
      priority: 2,
      last_update: new Date()
    },
    {
      id: '12',
      description: "Task 3",
      priority: 3,
      last_update: new Date()
    }
  ]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} bg='white'>
        <FlatList
          pl={4}
          pr={4}
          showsVerticalScrollIndicator={true}
          data={data}
          keyExtractor={(item: TaskCardProps) => String(item.id)}
          numColumns={1}
          renderItem={({ item }) => TaskCard(item as TaskCardProps)}
        />
      </Box>
    </SafeAreaView>
  )
}