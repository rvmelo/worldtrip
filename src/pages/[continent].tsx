import {Box, Text} from '@chakra-ui/react';

import { GetStaticPaths, GetStaticProps } from "next";
import { Description } from '../components/pages/continent/description';
import { Header } from '../components/header';
import { CardDeck } from '../components/pages/continent/cardDeck';

interface ContinentProps {
  name: string;
  url: string;
  description: string;
}

export default function Continent({name, url, description}: ContinentProps) {
  return(
    <Box width={{base: "100vh", md: "100%"}}>     
      <Header hasBackArrow />
      <Box 
        mx="auto" 
        maxWidth="1440px" 
        height={{base: "150px", md: "500px"}} 
        bgImage={url} 
        bgSize="cover"
        bgRepeat="no-repeat"
        display="flex"
        alignItems={{base: "center", md: "flex-end"}}
        justifyContent={{base: "center", md: "inherit"}}
      >
        <Text 
          ml={{base: 0, md: "140px"}} 
          mb={{base: 0, md: "59px"}} 
          fontSize={{base: "28px", md: "48px"}} 
          color="gray.900">
            {name}
        </Text>
      </Box>
      <Description description={description} />
      <Box 
        px={{base: 0, md: "140px"}} 
        mx="auto" 
        maxWidth={{base: '300px', md: '100%'}}
      >
          <Text fontSize={{base: "24px", md: "36px"}}>Cidades +100</Text>
          <CardDeck />
      </Box>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {params: {continent: 'Europa'}},
      {params: {continent: 'América do Norte'}},
      {params: {continent: 'América do Sul'}},
      {params: {continent: 'Ásia'}},
      {params: {continent: 'África'}},
      {params: {continent: 'Oceania'}},
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = ({params}) => {
  const {continent} = params;

  const continents = [
   {name: 'Europa', url: "url('/europe.png')", description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'},
   {name: 'América do Norte', url: "url('/north-america.png')"},
   {name: 'América do Sul', url: "url('/south-america-2.jpg')"},
   {name: 'Ásia', url: "url('/asia.jpg')"},
   {name: 'África', url: "url('/africa.jpg')"},
   {name: 'Oceania', url: "url('/oceania.jpg')"},
  ]

  const index = continents.findIndex(c => c.name === continent);

  return {
    props: {
      name: continent,
      url: continents[index].url,
      description: continents[index].description
    },
    revalidate: 60 * 60 * 24, 
  }

}