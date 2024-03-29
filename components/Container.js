import React, { useEffect } from "react";
import {Spacer, Box, Text, VStack, StackDivider, Wrap, WrapItem, IconButton, Link} from "@chakra-ui/react"
import Project from "./Project";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import IconCarousel from "./IconCarousel";
import Contact from "./Contact";
import GitHubIcon from "@mui/icons-material/GitHub"; 
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Container = () => {
  const textColor = "green.500";
  useEffect(()=>{
    let spans = document.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].addEventListener("mouseover", function() {
        spans[i].classList.add("active");
    })
  }
  }, [])

  return (
    <Box className="Container" mx={["2.5vw", "4.5vw", "7.5vw", "7.5vw"]} >
      <Nav />
      <MobileNav />
      <Box pb={["50px", "", "", ""]} height={["", "100vh", "100vh", "100vh"]}>
        <Box className="smoked words" pt={["10vh", "15vh", "18vh", "20vh"]}>
          <Text display="inline-block" fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]}><span>Hello,</span> <span>I&apos;m</span> <span>Kushal </span> <span>👋</span></Text>
          <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor}><br></br><span>I&apos;m</span> <span>a</span> <span>Software</span> <span>Engineer,</span><br></br><span>big</span> </Text>
          <span><Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color="white" backgroundColor="green.700">Br</Text>
          <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor} >eaking&nbsp;</Text></span>
          <span><Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color="white" backgroundColor="green.700">Ba</Text>
          <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor} >d</Text></span>
          <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor}> <span>fan,</span> <span>and</span><br></br><span>sports</span> <span>enthusiast</span> <span>🏀</span> <span>🏈.</span></Text>
        </Box>
      </Box>
      <span className="anchor" id="projects"></span>
      <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor}> &lt;div id = &apos;projects&apos;&gt;</Text>
      <VStack my="5vh" ml={["10px", "40px"]} divider={<StackDivider borderColor="green.500" />} spacing={"1vh"} align="stretch">
      <Project title="TerpXchange" githubLink="" demoLink=""
          desc="IOS application that allows students on UMD campus to buy and sell products."
          imagePath="./images/terpXchange.png" techArray={["SWIFT","GOOGLE FIREBASE", "XCODE"]}
        />
        <Project title="Sorting Visualizer" githubLink="https://github.com/kushaldevv/Sorting-Visualizer" demoLink="https://sorting-algorithms-viz.web.app/"
          desc="A visualiation tool for common sorting algorithms. I built this to aid me and some peers for technical interviews."
          imagePath="./images/sort1.png" techArray={["REACT", "GOOGLE FIREBASE"]}
        />
        <Project title="DevTaxes Website" githubLink="https://github.com/kushaldevv/devTaxes" demoLink="https://www.devtaxes.com"
          desc="Website for a company I worked for. I learned chakra ui and next js while doing this project."
          imagePath="./images/devtaxes.png" techArray={["NEXT.JS", "CHAKRA UI", "GOOGLE FIREBASE"]}
        />
        <Project title="Portfolio Page" githubLink="https://github.com/kushaldevv/Portfolio" demoLink=""
          desc="Fun little page created over the weekend to showcase my frontend skills."
          imagePath="./images/port2.png" techArray={["NEXTJS", "CHAKRA", "STYLED COMPONENTS", "VERCEL"]}
        />
      </VStack>
      <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor}> &lt;/div&gt;</Text>
      <Box my="5vh">
        <span className="anchor" id="tools"></span>
        <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor}> &lt;div id = &apos;tools&apos;&gt;</Text>
        <Box mt = "3vh" ml={["10px", "40px"]}>
          <IconCarousel />
        </Box>
        <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor}> &lt;/div&gt;</Text>
      </Box>
      <span className="anchor" id="contact"></span>
      <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor}> &lt;div id = &apos;contact&apos;&gt;</Text>
      <Wrap my = "5vh"  ml={["10px", "40px"]}>
        <WrapItem>
          <Box>
            <Text fontWeight="bold" fontSize="5xl">Get in Touch 🗣</Text>
            <Text pt="1vh" color="gray.500" fontSize="xl" fontWeight="medium">&#47;&#47;Socials</Text>
            <Link href="https://www.linkedin.com/in/kushal-devkota/" isExternal>
              <IconButton size="lg" borderRadius="full" my = "5" ml = "1" aria-label="Linkedln Icon" icon={<LinkedInIcon/>} />
            </Link>
            <Link href="https://github.com/kushaldevv" isExternal>
              <IconButton size="lg" borderRadius="full" my = "5" ml = "5" aria-label="Github Icon" icon={<GitHubIcon />}/>
            </Link>
          </Box>
        </WrapItem>
        <Spacer/>
        <WrapItem position="relative">
          <Contact/>
        </WrapItem>
      </Wrap>
      <Text fontWeight={"bold"} fontSize={["4xl", "5xl", "5xl", "5xl"]} display={"inline"} color={textColor}> &lt;/div&gt;</Text>
      <Box textAlign={"center"} pt="10vh" pb = "5vh">
        <Text>© {new Date().getFullYear()} Kushal Devkota. All rights reserved <br></br>Built with ❤️ in Maryland, US</Text>
      </Box>
    </Box>

  )
}

export default Container