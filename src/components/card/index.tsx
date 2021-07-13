import {Image, Box, Text} from '@chakra-ui/react';


export function Card() {
  return (
    <Box 
    maxWidth="256px" 
    maxHeight="279px" 
    borderRadius="4px" 
    borderColor="yellow.350"
    borderWidth="1px"
    bgColor="#FFFF"
    marginBottom="48px"
  >
    <Image height="173px" width="100%" src="/cards/london.png"  alt="" />
    <Box 
      display="flex" 
      px="24px"
      paddingTop="18px"
      paddingBottom="25px" 
      alignItems="center" 
      justifyContent="space-between"
    >
      <Box>
        <Text>Londres</Text>
        <Text>Reino Unido</Text>
      </Box>
      <Image width="30px" height="30px" src="/cards/england-flag.png" alt=""/>
    </Box>
  </Box>
  )
}