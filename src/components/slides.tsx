import { Box, Text} from '@chakra-ui/react';
import { SwiperSlide } from "swiper/react";

interface SlideData {
  title: string;
  label: string;
  url: string;
}

const slidesData: Array<SlideData> = [
  {title: 'Europa', label: 'O continente mais antigo.', url: "url('/europe.png')" },
  {title: 'América do Norte', label: 'Onde podemos encontrar a capital do cinema.', 
  url: "url('/north-america.png')"},
  {title: 'América do Sul', label: 'E suas belas cidades.', url: "url('/south-america-2.jpg')" },
  {title: 'Ásia', label: 'E sua cultura secular.', url: "url('/asia.jpg')" },
  {title: 'África', label: 'E seu rico ecossistema.', url: "url('/africa.jpg')"},
  {title: 'Oceania', label: 'E suas belas cidades.', url: "url('/oceania.jpg')" },

];

export const slides = slidesData.map(slideData => (

  <SwiperSlide key={slideData.title}>
    <Box 
      bgImage={slideData.url} 
      bgPosition="center" 
      bgRepeat="no-repeat" 
      bgSize="cover"
      display="flex" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center"
    >
      <Text fontSize="48px" fontWeight="bold" color="gray.900">{slideData.title}</Text>
      <Text fontSize="24px" fontWeight="bold" color="gray.900">{slideData.label}</Text>
    </Box>
  </SwiperSlide>
  
)
)

