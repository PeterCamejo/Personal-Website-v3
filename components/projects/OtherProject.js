import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Container,Badge, Text, Heading, Box, useColorModeValue, Link, HStack} from "@chakra-ui/react"

//TODO Take framer motion whileHover out of portfolio section code and place directly in this component instead.

const OtherProject = (props) =>{
    const boxAnimation = useAnimation();
    const [boxRef,  boxInView] = useInView();

    const bgColor = useColorModeValue("#ff531490" , '#09008890');
    const badgeColor = useColorModeValue("#FFCF07" , '#06fdd8');

    useEffect(()=>{
        if(boxInView){
            boxAnimation.start({opacity: 1 , y: 0 , transition:{delay: 0.5 + (props.projectIndex * 0.3)}});
        }
    } , [boxAnimation, boxInView]);

    return(
        <Link href={props.projectHref} _hover={{textDecoration:"none"}} isExternal>
            <Box as={motion.div} 
                initial={{opacity:0 , y:20}} 
                animate={boxAnimation} 
                ref={boxRef} 
                display="flex" 
                alignItems="center" 
                rounded="lg" 
                backgroundColor={bgColor} 
                boxShadow="base"  
                h={{base:"300px", xl:"400px"}}
                mb={{base:'30px' , xl:0}}
            >
                <Container>
                    <HStack>
                        <Heading as="h1" mr={1}>{props.projectTitle}</Heading>
                        <ExternalLinkIcon  boxSize={6}></ExternalLinkIcon>
                    </HStack>
                    <Text fontSize="20px" color="antiquewhite">{props.projectDescription}</Text>
                    {props.badges.map((badge, index) => {
                        return(
                        <Badge boxShadow="lg" 
                               mr={2}
                               backgroundColor={badgeColor} 
                               color="black"  
                               key={index}>
                                   {badge}
                        </Badge>
                        )
                        })
                    }
                    
                </Container>
            </Box>
        </Link>
        )
}

export default OtherProject