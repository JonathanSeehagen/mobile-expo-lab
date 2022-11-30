import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge, Box, HStack, Pressable, Spacer, Text } from "native-base";

interface PriorityBadgeProps {
  priority: number;
}

function dataHourToDateTimeString(data: Date): string {
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

export interface TaskCardProps {
  id: string;
  description: string;
  priority: number;
  last_update: Date;
}

export default function TaskCard({
  id,
  description,
  priority,
  last_update,
}: TaskCardProps) {
  return (
    <Pressable
      mt={3}
      width='90%'
      onPress={() => console.log(id)}
      alignSelf='center'
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
            shadow={2}
          // borderWidth="1"
          // borderColor="coolGray.300"
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