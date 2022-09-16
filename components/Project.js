import React from "react";
import {
  Link,
  Button,
  Box,
  Text,
  Image,
  Center,
  Wrap,
  WrapItem,
  Tag,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Project({ title, desc, imagePath, techArray, githubLink, demoLink }) {
  let bg = useColorModeValue("black", "white");
  let textColor = useColorModeValue("white", "black");
  let techArrayList = techArray.map((item, idx) => {
    return (
      <WrapItem key={idx}>
        <Tag backgroundColor={bg} color={textColor}>
          <TagLabel p="2" fontSize="md">
            {item}
          </TagLabel>
        </Tag>
      </WrapItem>
    );
  });
  return (
    <Box>
      <Center
        className="project"
        overflow="hidden"
        backgroundColor="black"
        borderRadius="5%"
        transition="ease-in-out"
        position="relative"
        textAlign="center"
      >
        <Image
          className="project-img"
          src={imagePath}
          fallbackSrc="https://via.placeholder.com/3024x1700"
          alt="projectImage"
        ></Image>
        <Box className="project-text" px="2vw" position="absolute" top={"30%"}>
          <Text
            color="white"
            fontWeight="bold"
            fontSize={["28px", "34px", "34px", "34px"]}
          >
            {title}
          </Text>
          <Text
            color="white"
            pt="3"
            fontWeight="medium"
            fontSize={["lg", "2xl", "2xl", "2xl"]}
          >
            {desc}
          </Text>
        </Box>
      </Center>
      <Text pt="1vh" color="gray.500" fontSize="xl" fontWeight="medium">
        &#47;&#47;Tech stack
      </Text>
      <Wrap py="2vh">{techArrayList}</Wrap>
      <Wrap>
        <WrapItem>
          <Link href={demoLink} isExternal>
            <Button fontSize="sm">
              <ExternalLinkIcon />
              &nbsp;Live demo
            </Button>
          </Link>
        </WrapItem>
        <WrapItem>
          <Link href={githubLink} isExternal>
            <Button fontSize="sm" mr="3">
              <GitHubIcon />
              &nbsp;View source
            </Button>
          </Link>
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default Project;
