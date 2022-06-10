import React, { useEffect } from "react";
import {Spacer, Box, Text, VStack, StackDivider, Wrap, WrapItem, IconButton, Link} from '@chakra-ui/react'
import Project from './Project';
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import IconCarousel from "./IconCarousel";
import Contact from "./Contact";
import GitHubIcon from '@mui/icons-material/GitHub'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = () => {
  const textColor = 'green.500';
  useEffect(()=>{
    let spans = document.querySelectorAll('span');
    for (let i = 0; i < spans.length; i++) {
      spans[i].addEventListener("mouseover", function() {
        spans[i].classList.add('active');
    })
  }
  }, [])

  // function changeBackground(e) {
  //     console.log(e);
  //     e.target.parentElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  // }

  return (
    <Box className="Container" mx={['2.5vw', '4.5vw', '7.5vw', '7.5vw']} >
      <Nav />
      <MobileNav />
      <Box pb={['50px', '', '', '']} height={['', '100vh', '100vh', '100vh']}>
        <Box className='smoked words' pt={['10vh', '15vh', '18vh', '20vh']}>
          <Text display='inline-block' fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']}><span>Hello,</span> <span>I'm</span> <span>Kushal</span> <span>👋</span></Text>
          <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor}><br></br><span>I'm</span> <span>a</span> <span>Full</span> <span>Stack</span> <span>Software</span> <span>Engineer,</span><br></br><span>huge</span> </Text>
          <span><Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color='white' backgroundColor='green.700'>Br</Text>
          <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor} >eaking&nbsp;</Text></span>
          <span><Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color='white' backgroundColor='green.700'>Ba</Text>
          <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor} >d</Text></span>
          <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor}> <span>fan,</span> <span>and</span><br></br><span>sports</span> <span>enthusiast</span> <span>🏀</span> <span>🏈.</span></Text>
        </Box>
      </Box>
      <span className='anchor' id='projects'></span>
      <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor}> &lt;Container id = 'projects'&gt;</Text>
      <VStack my='5vh' ml={['10px', '40px']} divider={<StackDivider borderColor='green.500' />} spacing={'1vh'} align='stretch'>
        <Project title='Bug Tracker - In progress' githubLink='https://www.google.com' demoLink='https://www.google.com'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          imagePath='' techArray={['REACT', 'NODE', 'TYPESCRIPT', 'EXPRESSS', 'MONGODB', 'CHAKRA', 'GOOGLE FIREBASE']} />
        <Project title='Sorting Visualizer' githubLink='https://github.com/kushaldevv/Sorting-Visualizer' demoLink=''
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          imagePath='' techArray={['REACT', 'GOOGLE FIREBASE']}
        />
        <Project title='Netflix Clone' githubLink='https://github.com/kushaldevv/netflixClone' demoLink='https://netflix-kushal.web.app/'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          imagePath='./images/flixClone.png' techArray={['REACT', 'GOOGLE FIREBASE']}
        />
        <Project title='Portfolio Page' githubLink='https://github.com/kushaldevv/Portfolio' demoLink=''
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          imagePath='./images/port2.png' techArray={['NEXTJS', 'CHAKRA', 'STYLED COMPONENTS', 'GITHUB PAGES']}
        />
      </VStack>
      <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor}> &lt;/Container&gt;</Text>
      <Box my='5vh'>
        <span className='anchor' id='tools'></span>
        <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor}> &lt;Container id = 'tools'&gt;</Text>
        <Box mt = '3vh' ml={['10px', '40px']}>
          <IconCarousel />
        </Box>
        <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor}> &lt;/Container&gt;</Text>
      </Box>
      <span className='anchor' id='contact'></span>
      <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor}> &lt;Container id = 'contact'&gt;</Text>
      <Wrap my = '5vh'  ml={['10px', '40px']}>
        <WrapItem>
          <Box>
            <Text fontWeight='bold' fontSize='5xl'>Get in Touch 🗣</Text>
            <Text pt='1vh' color='gray.500' fontSize='xl' fontWeight='medium'>//Socials</Text>
            <Link href='https://www.linkedin.com/in/kushal-devkota-903a49237/' isExternal>
              <IconButton size='lg' borderRadius='full' my = '5' ml = '1' aria-label='Linkedln Icon' icon={<LinkedInIcon/>} />
            </Link>
            <Link href='https://github.com/kushaldevv' isExternal>
              <IconButton size='lg' borderRadius='full' my = '5' ml = '5' aria-label='Github Icon' icon={<GitHubIcon />}/>
            </Link>
          </Box>
        </WrapItem>
        <Spacer/>
        <WrapItem position='relative'>
          <Contact/>
        </WrapItem>
      </Wrap>
      <Text fontWeight={'bold'} fontSize={['4xl', '5xl', '5xl', '5xl']} display={'inline'} color={textColor}> &lt;/Container&gt;</Text>
      <Box textAlign={'center'} pt='10vh' pb = '5vh'>
        <Text>© 2022 Kushal Devkota. All rights reserved <br></br>Built with ❤️ in Maryland, US</Text>
      </Box>
    </Box>

  )
}

export default Container