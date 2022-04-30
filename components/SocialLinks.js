import {VStack, Link, Icon} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {FaGithub, FaLinkedinIn, FaCodepen, FaRegEnvelope} from 'react-icons/fa'

const SocialLinks = () =>{

    return(
    
        <VStack zIndex={5} 
                display={{base:"none", md:"flex"}} 
                h="40vh" 
                flexDir="column" 
                position="fixed" 
                ml={3}  
                bottom={0} 
                left={0}>
                <Link as={motion.a}  
                      href="https://www.linkedin.com/in/peter-camejo-908472110/" 
                      whileHover={{scale:1.2}} 
                      isExternal
                >   
                    <motion.div initial={{opacity:0, y:30}} animate={{opacity:[0,1], y:[30,0]}} transition={{delay:4.6, type:'spring', bounce:1, duration:0.5}}>
                        <Icon as={FaLinkedinIn} boxSize={8} />
                    </motion.div>
                </Link> 
                <Link as={motion.a} 
                      href="https://github.com/PeterCamejo" 
                      whileHover={{scale:1.2}} 
                      isExternal
                >
                    <motion.div initial={{opacity:0, y:30}} animate={{opacity:[0,1], y:[30,0]}} transition={{delay:4.9, type:'spring', bounce:1, duration:0.5}}> 
                        <Icon as={FaGithub} boxSize={8}  />
                    </motion.div>
                </Link>
            
                <Link as={motion.a} 
                      href="https://codepen.io/TheAlexC"  
                      whileHover={{scale:1.2}} 
                      isExternal
                >
                    <motion.div initial={{opacity:0, y:30}} animate={{opacity:[0,1], y:[30,0]}} transition={{delay:5.2, type:'spring', bounce:1, duration:0.5}}>        
                            <Icon as={FaCodepen} boxSize={8}  />
                    </motion.div>    
                </Link>

                <Link as={motion.a} 
                      href="mailto: pa.camejo@gmail.com" 
                      whileHover={{scale:1.2}} 
                      isExternal
                >
                    <motion.div initial={{opacity:0, y:30}} animate={{opacity:[0,1], y:[30,0]}} transition={{delay:5.5, type:'spring', bounce:1, duration:0.5}}>
                            <Icon as={FaRegEnvelope} boxSize={8}  />
                    </motion.div>     
                </Link>

        </VStack>
    )
}

export default SocialLinks