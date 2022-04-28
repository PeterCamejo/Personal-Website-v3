import { Container,Badge, Text, Heading, Box, useColorModeValue, Link, textDecoration } from "@chakra-ui/react"
import { motion, useAnimation } from 'framer-motion'
import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'

//TODO Take framer motion whileHover out of portfolio section code and place directly in this component instead.

const OtherProject = (props) =>{
    const boxAnimation = useAnimation();
    const [boxRef,  boxInView] = useInView();

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
                backgroundColor={useColorModeValue("#ff531490" , '#09008890')} 
                boxShadow="base"  
                h={{base:"300px", xl:"400px"}}
                mb={{base:'30px' , xl:0}}
            >
                <Container>
                    <Heading as="h1">{props.projectTitle}</Heading>
                    <Text fontSize="20px" color="antiquewhite">{props.projectDescription}</Text>
                    {props.badges.map((badge, index) => {
                        return(
                        <Badge boxShadow="lg" mr={2} backgroundColor={useColorModeValue("#FFCF07" , '#06fdd8')} color="black"  key={index}>{badge}</Badge>
                        )
                        })
                    }
                </Container>
            </Box>
        </Link>
        )
}

export default OtherProject