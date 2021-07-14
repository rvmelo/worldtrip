import {Box} from '@chakra-ui/react';
import { Card } from '../../card';

export function CardDeck() {
  return (
    <Box 
    display="flex" 
    flexWrap="wrap"
    justifyContent={{base: "flex-end", md: "flex-start"}} 
    marginTop="40px" 
    marginBottom="35px"
    mx="auto"
  >
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Box>
  )
}