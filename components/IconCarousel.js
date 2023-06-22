import React from "react"
import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"

function IconCarousel() {
  return (
    <Box className="slider" 
    _before={useColorModeValue({background :'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)'}, {background :'linear-gradient(to left, rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 1) 100%)'})} 
    _after={useColorModeValue({background :'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)'}, {background :'linear-gradient(to left, rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 1) 100%)'})} 
    >
      <Box className="slide-track">
        <Box className="slide">
          <Image src="/logos/react.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>React</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/nextjs.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>NextJs</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/chakra.png" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Chakra</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/nodejs.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>NodeJS</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/python.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Python</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/java.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Java</Text>
        </Box>
        {/* <Box className="slide">
          <Image src="/logos/type.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Type- <br></br>Script</Text>
        </Box> */}
        <Box className="slide">
          <Image src="/logos/mongodb.png" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>MongoDB</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/ec2.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>AWS EC2</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/firebase.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Google<br></br>Firebase</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/react.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>React</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/nextjs.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>NextJs</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/chakra.png" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Chakra</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/nodejs.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>NodeJS</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/python.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Python</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/java.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Java</Text>
        </Box>
        {/* <Box className="slide">
          <Image src="/logos/type.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Type- <br></br>Script</Text>
        </Box> */}
        <Box className="slide">
          <Image src="/logos/mongodb.png" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>MongoDB</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/ec2.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>AWS EC2</Text>
        </Box>
        <Box className="slide">
          <Image src="/logos/firebase.svg" width="150px" alt = "iconImage" height="150px" />
          <Text color={useColorModeValue("black", "white")}>Google<br></br>Firebase</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default IconCarousel