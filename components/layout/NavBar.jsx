import { Button, Flex, Link } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import React from 'react';

import logo from '../../public/logos/smart-invoice/normal.svg';

export function NavBar({ ...props }) {
  return (
    <Flex background="white" justify="center" align="center">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        height={75}
        paddingX={8}
        paddingY={4}
        background="white"
        textColor="gray.dark"
        width="100%"
        {...props}
      >
        {/* Logo */}
        <Flex width={250}>
          <NextLink href='/' passHref>
            <Flex cursor='pointer'>
              <NextImage src={logo} width={220} height={34.84} />
            </Flex>
          </NextLink>
        </Flex>

        {/* Navigation Links */}
        <Flex gap={8} justify="center" align="center">
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href="https://docs.smartinvoice.xyz" passHref>
            <Link target='_blank'>Documentation</Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link>Support</Link>
          </NextLink>
        </Flex>

        {/* App Button */}
        <Flex width={250} justify='right'>
          <NextLink href="https://app.smartinvoice.xyz" passHref>
            <Button background="blue.1" textColor="white" borderRadius={8}>
              Open dApp
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
}