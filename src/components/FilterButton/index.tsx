import { IconButton, IIconButtonProps } from "native-base";

export default function FilterButton({ ...rest }: IIconButtonProps) {
  return (
    <IconButton
      bg='muted.800'
      size='sm'
      _pressed={{
        bgColor: 'gray.100'
      }}
      {...rest}
    />
  )
}

{/* <FilterButton
              icon={<Ionicons name="filter" size={15} color="white" />}
              onPress={() => console.log('FilterButton')}
            /> */}
{/* <FilterButton
              icon={<MaterialIcons name="add" size={16} color="white" />}
              onPress={() => console.log('AddButton')}
            /> */}