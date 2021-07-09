import {Image, Box, Text, useBreakpointValue } from '@chakra-ui/react';

export function TravelTypes() {

  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  return !isMobileVersion ? (
    <Box maxWidth='1160px' justifyContent="space-between" display="flex" mx="auto">
     <Image src="/nightlife.svg" alt=""  />
     <Image src="/beach.svg" alt="" />
     <Image src="/modern.svg" alt="" />
     <Image src="/classic.svg" alt="" />
     <Image src="/more.svg" alt="" />
   </Box>
 ): (
   
   <Box w="275px" h="120px" mx="auto">
     <Box display="flex" alignItems="center" mb="27px">
       <Box 
         w="8px" 
         h="8px" 
         borderRadius="50%" 
         bgColor="yellow.350"
         mr="8px" 
       />
       <Text mr="71px" size="18px">vida noturna</Text>
       <Box 
         w="8px" 
         h="8px" 
         borderRadius="50%" 
         bgColor="yellow.350"
         mr="8px" 
       />
       <Text size="18px">praia</Text>
     </Box>
     <Box display="flex" alignItems="center" mb="27px">
       <Box 
         w="8px" 
         h="8px" 
         borderRadius="50%" 
         bgColor="yellow.350"
         mr="8px" 
       />
       <Text mr="71px" size="18px">moderno</Text>
       <Box 
         w="8px" 
         h="8px" 
         borderRadius="50%" 
         bgColor="yellow.350"
         mr="8px" 
       />
       <Text size="18px">clássico</Text>
     </Box>
     <Box display="flex" alignItems="center" justifyContent="center">
       <Box 
         w="8px" 
         h="8px" 
         borderRadius="50%" 
         bgColor="yellow.350"
         mr="8px" 
       />
       <Text mr="71px" size="18px">moderno</Text>
     </Box>
   </Box>
   
 )
} 