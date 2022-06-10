import React, {useState} from "react";
import {Box, IconButton, Button, Spacer, useColorModeValue, Flex } from '@chakra-ui/react'
import styled from "@emotion/styled"
import NextLink from 'next/link'
import ThemeSwitch from "./ThemeSwitch";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function MobileNav() {
  const textColor = 'green.500';
  const bg = useColorModeValue('white', '#1a202c');
  const [display, setDisplay] = useState('none');
  const StickNav = styled(Flex)`
    position: sticky;
    width: 100%;
    z-index: 100;
    top: 0;
  `
  return (
    <StickNav py={[5]} backgroundColor={bg} display={['flex', 'flex', 'flex', 'none']}>
      <Flex>
        <NextLink href='/' passHref>
          <Button as="a" pl='0' variant='ghost' fontSize='3xl' fontWeight='bold' _hover={{ color: textColor }}>kushal.devkota</Button>
        </NextLink>
      </Flex>
      <Spacer />
      <Flex w='100vw' h='100vh' flexDir='column'
        pos='fixed' top='0' left='0'
        overflowY='hidden' zIndex='99'
        bgColor={bg} opacity = '0.9' pr={['2.5vw', '4.5vw', '7.5vw', '7.5vw']}
        display= {display}
      >
        <Flex mt = '5' direction='column' ml = 'auto'>
          <IconButton icon={<CloseIcon w='50' h='5' />}
            onClick = {() => setDisplay('none')}
          />
        </Flex>
        <Spacer />
        <Flex mb='10' direction='column' ml= 'auto' mr= '-4'>
          <NextLink href='#projects' passHref>
            <Button mb='10' as="a" variant='ghost' fontSize='3xl' fontWeight='bold' _hover={{ color: textColor }} onClick = {() => setDisplay('none')}>&nbsp;projects()</Button>
          </NextLink>
          <NextLink href='#tools' passHref>
            <Button mb='10' as="a" variant='ghost' fontSize='3xl' fontWeight='bold' _hover={{ color: textColor }} onClick = {() => setDisplay('none')}>&nbsp;&nbsp;&nbsp;&nbsp;tools()</Button>
          </NextLink>
          <NextLink href='#resume' passHref>
            <Button mb='10' as="a" variant='ghost' fontSize='3xl' fontWeight='bold' _hover={{ color: textColor }} onClick = {() => setDisplay('none')}>&nbsp;&nbsp;&nbsp;resume()</Button>
          </NextLink>
          <NextLink href='#contact' passHref>
            <Button as="a" variant='ghost' fontSize='3xl' fontWeight='bold' _hover={{ color: textColor }} onClick = {() => setDisplay('none')}>contact(me)</Button>
          </NextLink>
        </Flex>
        <Flex mb='12vh' direction='column' ml = 'auto'>
          <ThemeSwitch/>
        </Flex>
      </Flex>
      <Flex>
        <IconButton display={display === 'flex'? 'none': 'flex'} right='0' icon={<HamburgerIcon w='50' h='5' />} 
          onClick = {() => setDisplay('flex')}
        />
      </Flex>
    </StickNav>
  )
}

export default MobileNav