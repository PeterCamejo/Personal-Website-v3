import styles from '../styles/Project.module.css'
import {Box, Container, Flex, Text, Badge, Link, Heading, useColorModeValue, useColorMode} from "@chakra-ui/react"
import Image from 'next/image'
import {FiGithub} from 'react-icons/fi'
import {Icon} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import { motion, useAnimation } from 'framer-motion'
import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'


const ReverseProject = (props) =>{
    const imageAnimation = useAnimation();
    const descriptionAnimation = useAnimation();
    const headingAnimation = useAnimation();
    const badgeAnimation = useAnimation();
    const [headingRef, headingInView] = useInView();

    const {colorMode} = useColorMode();
    const bg = colorMode === 'light' ? "#ff5314" : '#090088';

    useEffect(()=>{
        if(headingInView){
            headingAnimation.start({opacity:1, y:0, transition:{delay: 0.5 , ease:'easeIn' , duration:0.5}});
            imageAnimation.start({opacity: 1 , x: 0 });
            descriptionAnimation.start({opacity:1 , y: 0, transition:{delay:0.8, ease:'easeIn', duration: 0.5}});
            badgeAnimation.start( i => ({opacity:1 , y: 0 , transition:{delay: 1 + (i * 0.2)}}));
        }
    }, [headingAnimation, headingInView]);


    return(
        <Flex className={styles.projectContainer} 
              direction={{base:"column", md:"row"}} 
              justify={{base:"center", md:"end"}} 
              align="center" 
              mb={"120px"} 
        >
            
            <Box as={motion.div} 
                 initial={{opacity:0 , x:20}} 
                 animate={imageAnimation}  
                 boxShadow="base" 
                 backgroundColor={useColorModeValue("#FFCF07", '#06fdd8')} 
                 _hover={{backgroundColor:"none"}} 
                 className={styles.projectImageContainer}
            >
                <Image src={props.projectImage} height="500px" width="400px" className={styles.projectImage} />
            </Box>
            <Container  textAlign={{base:'center' , md:'end'}} w={{base:'300px' , md:"fit-content"}} className={styles.projectDetails}>
                <motion.div initial={{opacity:0 , y: 20}} animate={headingAnimation} ref={headingRef}>    
                    <Heading as="h1" className={styles.projectTitle} mb={3}>{props.projectTitle}</Heading>
                </motion.div>
                <Text  as={motion.div} 
                       initial={{opacity:0 , y:20}} 
                       animate={descriptionAnimation}  
                       textAlign="left" 
                       rounded='md' 
                       backgroundColor={{base:"transparent" , md: bg}} 
                       boxShadow="base" 
                       ml={{base:0 , md:-20}} 
                       className={styles.projectDescription} 
                       fontSize={{base:"18px" , md: "20px"}}
                >
                    {props.projectDescription}
                </Text>
                {props.badges.map((badge,index) =>{
                    return (
                        <Badge as={motion.div} 
                               initial={{opacity: 0 , y:20}} 
                               custom={index+1} 
                               animate={badgeAnimation} 
                               boxShadow="lg" 
                               className="badge" 
                               mr={2}
                               fontSize={{base:'11px', md:'13px'}}
                               backgroundColor={useColorModeValue("#FFCF07" , '#06fdd8')} 
                               color="black" 
                               float={{base:"left", md:"none"}} 
                               mt={{base:2,md:0}} 
                               key={index}
                        >
                                   {badge}
                        </Badge>
                    )
                })}
                {props.githubLink ? <Link as={motion.a} initial={{opacity:0 , y:20}} animate={descriptionAnimation} whileHover={{scale:1.2}} href={props.githubLink} float={{base:"right",md:"left"}} mt={1} isExternal><Icon as={FiGithub} boxSize={6} ></Icon></Link> : null}{ props.demoLink ? <Link href={props.demoLink} as={motion.a} initial={{opacity:0 , y:20}} animate={descriptionAnimation}  whileHover={{scale:1.2}} float="right" mr={2} isExternal><ExternalLinkIcon boxSize={6}></ExternalLinkIcon></Link> : null}

            </Container>
            

            
        </Flex>

        )
}

export default ReverseProject;