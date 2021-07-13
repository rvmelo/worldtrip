import {Image, Box, Text, useBreakpointValue} from '@chakra-ui/react';

interface DescriptionProps {
  description: string;
}

export function Description({description}:DescriptionProps) {
  return (
    <Box 
        display="flex" 
        justifyContent="space-between"
        mx="auto"
        maxWidth="1440px"
        px="140px"
        py="80px"
      >
        <Box maxWidth="600px" maxHeight="211px">
          <Text fontSize="24px">{description}</Text>
        </Box>
        <Box my="auto" display="flex">
            <Box>
              <Text fontSize="48px" color="yellow.350">50</Text>
              <Text fontSize="24px">Países</Text>
            </Box>
            <Box mx="42px">
              <Text fontSize="48px" color="yellow.350">
                60
              </Text>
              <Text fontSize="24px">Línguas</Text>
            </Box>
            <Box>
              <Text fontSize="48px" color="yellow.350">
                27
              </Text>
              <Text fontSize="24px">cidades +100</Text>
            </Box>
          </Box>
      </Box>
  )
}