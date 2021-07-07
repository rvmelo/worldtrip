import Head from 'next/head'
import {Image, Box, Text} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Box mt='27px' mb='27px'>
        <Image mx='auto'  src="/logo.svg"/>
      </Box>
      <Box 
        maxWidth='1440px'
        pt="80px"
        pb="70px"
        bgImage="url('/background.png')" 
        bgRepeat="no-repeat"
        display='flex'
        mx="auto"
        mb="114px"
      >
       <Box>
        <Box ml="140px" mb="20px" >
          <Text fontSize="36px" color="gray.900">5 Continentes,</Text>
          <Text fontSize="36px" color="gray.900">infinitas possibilidades</Text>
        </Box>
        <Box ml="140px">
          <Text fontSize="20px" color="gray.800">Chegou a hora de tirar do papel a viagem que você</Text>
          <Text fontSize="20px" color="gray.800">sempre sonhou.</Text>
        </Box>
       </Box>
        <Image ml="205.25px" top="176px" src="/airplane.svg" />        
       </Box>
    </Box>
  );
}
