import {Image, Box, Text, useBreakpointValue} from '@chakra-ui/react';

interface DescriptionProps {
  description: string;
}

export function Description({description}:DescriptionProps) {
  return (
    <Box 
      display="flex" 
      flexDirection={{base: "column", md: "row"}}
      justifyContent="space-between"
      mx="auto"
      maxWidth={{base: '343px', md: "1440px"}}
      px={{base: '0', md: '140px'}}
      paddingTop={{base: '24px', md: '80px'}}
      paddingBottom={{base: '32px', md: '80px'}}
    >
      <Box maxWidth={{base: '343px', md: '600px'}} >
        <Text fontSize={{base: '14px', md: '24px'}}>{description}</Text>
      </Box>
      <Box 
        // my="auto"
        marginTop={{base: "16px", md: "auto"}}
        marginBottom={{base: 0, md: "auto"}} 
        display="flex"
      >
        <Box>
          <Text fontSize={{base: '24px', md: '48px'}} color="yellow.350">50</Text>
          <Text fontSize={{base: '18px', md: '24px'}}>Países</Text>
        </Box>
        <Box mx="42px">
          <Text fontSize={{base: '24px', md: '48px'}} color="yellow.350">
            60
          </Text>
          <Text fontSize={{base: '18px', md: '24px'}}>Línguas</Text>
        </Box>
        <Box>
          <Text textAlign="center" fontSize={{base: '24px', md: '48px'}} color="yellow.350">
            27
          </Text>
          <Text fontSize={{base: '18px', md: '24px'}}>cidades +100</Text>
        </Box>
      </Box>
    </Box>
  )
}