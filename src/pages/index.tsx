import {Image, Box, Text, useBreakpointValue} from '@chakra-ui/react';
import { Swiper } from "swiper/react";

import 'swiper/swiper-bundle.css';
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

import {slides} from '../components/home/slides';
import { TravelTypes } from '../components/home/travelTypes';


SwiperCore.use([Navigation, Pagination]);

export default function Home() {


  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  })

  return (
    <Box>
      <Box mt='27px' mb='27px'>
        <Image mx='auto'  src="/logo.svg" alt="" />
      </Box>
      <Box 
        maxWidth='1440px'
        pt="80px"
        pb="70px"
        bgImage="url('/background.png')" 
        bgSize="cover"
        bgRepeat="no-repeat"
        display='flex'
        mx="auto"
        mb={{base: "36px", md: "114px"}}
      >
       <Box>
        <Box ml={["4", "35"]} mb={["2", "5"]} >
          <Text fontSize="36px" color="gray.900">5 Continentes,</Text>
          <Text fontSize="36px" color="gray.900">infinitas possibilidades</Text>
        </Box>
        <Box ml={["4", "35"]}>
          <Text fontSize="20px" color="gray.800">Chegou a hora de tirar do papel a viagem que você</Text>
          <Text fontSize="20px" color="gray.800">sempre sonhou.</Text>
        </Box>
       </Box>
        {!isMobileVersion && <Image ml="205.25px" top="176px" src="/airplane.svg" alt="" /> }       
       </Box>

     
      <TravelTypes />

      <Box mx="auto" mt="80px" borderBottomWidth="2px" w="90px" borderColor="gray.700" />
      <Box mt="52px" mb="52px">
        <Text textAlign="center" fontSize="36px">Vamos Nessa?</Text>
        <Text textAlign="center" fontSize="36px">Então escolha seu continente</Text>
      </Box>
      <Swiper
        slidesPerView={1}
        pagination  
        navigation 
      >
        {slides}
      </Swiper>

    </Box>
  );
}
