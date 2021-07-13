import {Image, Box} from '@chakra-ui/react';

// navigation
import Link from 'next/link';

interface HeaderProps {
  hasBackArrow?: boolean;
}

export function Header({hasBackArrow = false}: HeaderProps) {
  return (
    <Box display="flex" maxWidth="1440px" mx='auto'>
      {hasBackArrow ? (
        <> 
          <Link href="/" passHref>
            <Image ml="140px" mt='34px' mb='34px' src="/back-arrow.svg" alt="" cursor="pointer" />
          </Link>
          <Image ml="456px" mt='27px' mb='27px'  src="/logo.svg" alt="" />
        </>
      ) : (
        <Image mx="auto" mt='27px' mb='27px'  src="/logo.svg" alt="" />
      )}
    </Box>
  )
}