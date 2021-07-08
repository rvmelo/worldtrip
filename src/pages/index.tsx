import Head from 'next/head'
import {Image, Box, Text, HStack} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.css';
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination])

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

      <Box maxWidth='1160px' justifyContent="space-between" display="flex" mx="auto">
        <Image src="/nightlife.svg"  />
        <Image src="/beach.svg"  />
        <Image src="/modern.svg" />
        <Image src="/classic.svg"  />
        <Image src="/more.svg" />
      </Box>
      <Box mx="auto" mt="80px" borderBottomWidth="2px" w="90px" borderColor="gray.700" />
      <Box mt="52px" mb="52px">
        <Text textAlign="center" fontSize="36px">Vamos Nessa?</Text>
        <Text textAlign="center" fontSize="36px">Então escolha seu continente</Text>
      </Box>
      <Swiper
        slidesPerView={1}
        // spaceBetween={0}
        pagination  
        navigation 
      >
        <SwiperSlide>
          <Box 
            // w="1240px" 
            // h="450px" 
            bgImage="url('/europe.png')" 
            display="flex" 
            flexDirection="column"
            justifyContent="center" 
            alignItems="center"
          >
              <Text fontSize="48px" fontWeight="bold" color="gray.900">Europa</Text>
              <Text fontSize="24px" fontWeight="bold" color="gray.900">O continente mais antigo.</Text>
          </Box>     
        </SwiperSlide>
        <SwiperSlide>
          <Box  bgImage="url('/north-america.png')" />
        </SwiperSlide>
      </Swiper>

    </Box>
  );
}
