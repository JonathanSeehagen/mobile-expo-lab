import TaskCard, { TaskCardProps } from "@components/TaskCard";
import { Box, FlatList, HStack, Skeleton, Spinner, Text, VStack } from "native-base";
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

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

  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Box
        pl={4} pt={4} pr={4}
      >
        <Box borderBottomWidth={1} borderBottomColor='gray.100'>
          <HStack>
            <Text
              fontFamily="description"
              color="coolGray.800"
              fontWeight="medium"
              fontSize="lg"
            >
              My Taks</Text>
          </HStack>
          <HStack mb={3} justifyContent='space-between'>
          </HStack>
        </Box>
      </Box>
      <Box flex={1} bg='white' >
        {
          isLoading ? (
            <VStack mt={3} space={3} alignSelf='center' alignItems='center' w='90%'>
              <Skeleton h="20" borderRadius={5} />
              <Skeleton h="20" borderRadius={5} />
              <Skeleton h="20" borderRadius={5} />
              <Skeleton h="20" borderRadius={5} />
            </VStack>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={true}
              data={data}
              keyExtractor={(item: TaskCardProps) => String(item.id)}
              numColumns={1}
              renderItem={({ item }) => TaskCard(item as TaskCardProps)}
              ListFooterComponent={
                isLoading ? (
                  <Spinner pb={3} pt={3} size='lg' color='gray.200' />
                ) : (
                  <Box pb={3} />
                )
              }
            />
          )
        }
      </Box>
    </SafeAreaView >
  )
}