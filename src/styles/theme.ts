import {extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '350': '#FFBA08'
    },
    gray: {
      '800': '#DADADA',
      '900': '#F5F8FA'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: '#47585B'
      }
    }
  }
})