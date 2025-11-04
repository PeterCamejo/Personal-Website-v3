import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import styles from '../../styles/Project.module.css'
import { motion, useAnimation } from 'framer-motion'
import {Icon} from '@chakra-ui/react'
import {FiGithub} from 'react-icons/fi'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Box, Container, Flex, Text, Badge, Link, Heading, useColorModeValue, useColorMode, Image, HStack} from "@chakra-ui/react"


const Project = (props) =>{
    const imageAnimation = useAnimation();
    const descriptionAnimation = useAnimation();
    const headingAnimation = useAnimation();
    const badgeAnimation = useAnimation();
    const [headingRef, headingInView] = useInView();
    
    const {colorMode} = useColorMode();
    const bg = colorMode === 'light' ? "#ff6128" : '#21159e';
    const imageBgColor = useColorModeValue('#FFD166', '#B0DFFF');
    const imageBg = useColorModeValue("linear-gradient(0.4turn, #fcc404, #fcc917)", "linear-gradient(0.4turn, #06fdd8, #06fdf1)");
    const badgeColor = useColorModeValue('#FFD166', '#B0DFFF');
    const headingColor = useColorModeValue('#FFD166', '#B0DFFF');

    useEffect(()=>{
        if(headingInView){
            headingAnimation.start({opacity:1, y:0, transition:{delay: 0.5 , ease:'easeIn' , duration:0.5}});
            imageAnimation.start({opacity: 1 , x: 0 });
            descriptionAnimation.start({opacity:1 , y: 0, transition:{delay:0.8, ease:'easeIn', duration: 0.5}});
            badgeAnimation.start( i => ({opacity:1 , y: 0 , transition:{delay: 1 + (i * 0.2)}}));
        }
    }, [headingAnimation, imageAnimation, badgeAnimation,descriptionAnimation, headingInView]);

    return(
        <Flex className={styles.projectContainer} 
              direction={{base:"column", md:"row"}}
              justify="center"
              align="center" 
              mb={"120px"} 
        >
            <Container className={styles.projectDetails} 
                       align={{base:'center' , md:'start'}} 
                       w={{base:'300px' , md:"fit-content"}}
            >
                <motion.div initial={{opacity:0 , y: 20}} animate={headingAnimation} ref={headingRef}>
                    <Link href={props.demoLink ? props.demoLink : props.githubLink} 
                          _hover={{color:headingColor}} 
                          isExternal
                    >
                        <Heading as="h1" className={styles.projectTitle} mb={3}>{props.projectTitle}</Heading>
                    </Link>
                </motion.div>    
                <Text as={motion.div} 
                      initial={{opacity:0 , y:20}} 
                      animate={descriptionAnimation}  
                      boxShadow="base" 
                      backgroundColor={{base:"transparent" , md: bg}} 
                      mr={{base:0 , md:-20}} 
                      rounded='md' 
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
                               backgroundColor={badgeColor} 
                               color="black" 
                               key={index}
                        >
                            {badge}
                        </Badge>
                    )
                })}
                <HStack float="right" w="fit-content">
                    {props.githubLink ? 
                        <Link as={motion.a} 
                            initial={{opacity:0 , y:20}} 
                            animate={descriptionAnimation}  
                            whileHover={{scale:1.2}} 
                            href={props.githubLink} 
                            float="right" 
                            mt={1} 
                            isExternal
                        >
                            <Icon as={FiGithub} boxSize={6} ></Icon>
                        </Link> : null}
                    { props.demoLink ? 
                        <Link href={props.demoLink} 
                            as={motion.a} 
                            initial={{opacity:0 , y:20}} 
                            animate={descriptionAnimation}  
                            whileHover={{scale:1.2}} 
                            float="right" 
                            mr={2} 
                            isExternal
                        >
                        <ExternalLinkIcon boxSize={6}></ExternalLinkIcon></Link> : null}
                </HStack>
            </Container>
                <Link href={props.demoLink ? props.demoLink : props.githubLink} isExternal>        
                    <Box as={motion.div} 
                        initial={{opacity:0 , x:20}} 
                        animate={imageAnimation}
                        whileHover={{scale:1.01}}
                        rounded="md" 
                        boxShadow={{base:"dark-lg", md:"base"}} 
                        backgroundColor={ imageBgColor}
                        background={imageBg}
                        className={styles.projectImageContainer} 
                        _hover={{md:{backgroundColor:"none", background:"none"}}} 
                    >
                        <Image src={props.projectImage} 
                               height="500px" 
                               width="400px" 
                               fit="cover"
                               alt="project screenshot"  
                               className={styles.projectImage} />
                    </Box>
                </Link>

            
        </Flex>

        )
}

export default Project;