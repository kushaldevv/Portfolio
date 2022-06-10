import React from "react";
import { Button, Spacer, useColorModeValue, Flex} from "@chakra-ui/react"
import styled from "@emotion/styled"
import NextLink from "next/link"
import ThemeSwitch from "./ThemeSwitch";

function Nav() {
  const textColor = "green.500";
  const bg = useColorModeValue("white", "#1a202c");
  const StickNav = styled(Flex)`
    position: sticky;
    width: 100%;
    z-index: 100;
    top: 0;
  `
  return (
    <StickNav py={[5]} backgroundColor={bg} display={["none", "none", "none", "flex"]}>
      <Flex>
        <NextLink href="/" passHref>
          <Button as="a" pl="0" variant="ghost" fontSize="3xl" fontWeight="bold" _hover={{ color: textColor }}>kushal.devkota</Button>
        </NextLink>
      </Flex>
      <Spacer />
      <Flex>
        <NextLink href="#projects" passHref>
          <Button as="a" variant="ghost" fontSize="md" _hover={{ color: textColor }} >projects()</Button>
        </NextLink>
        <NextLink href="#tools" passHref>
          <Button as="a" variant="ghost" fontSize="md" _hover={{ color: textColor }} >tools()</Button>
        </NextLink>
        <NextLink href="#resume" passHref>
          <Button as="a" variant="ghost" fontSize="md" _hover={{ color: textColor }} >resume()</Button>
        </NextLink>
        <NextLink href="#contact" passHref>
          <Button as="a" variant="ghost" fontSize="md" _hover={{ color: textColor }} >contact(me)</Button>
        </NextLink>
        <ThemeSwitch />
      </Flex>
    </StickNav>
  )
}

export default Nav