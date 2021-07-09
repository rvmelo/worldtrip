import {Image, Box, Text, useBreakpointValue} from '@chakra-ui/react';

import { GetStaticPaths, GetStaticProps } from "next";

interface ContinentProps {
  name: string;
  url: string;
}

export default function Continent({name}: ContinentProps) {
  return(
    <Text>{name}</Text>
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
   {name: 'Europa', url: "url('/europe.png')"},
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
    },
    revalidate: 60 * 60 * 24, 
  }

}