import { HStack, Link, Icon} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {FaGithub, FaLinkedinIn, FaCodepen, FaRegEnvelope} from 'react-icons/fa'

const MobileSocialLinks = () => {

    return(
        <HStack display={{base: 'flex' , md:"none"}}
                mt="auto"
                p={2}
                w="100%"
                justifyContent="space-evenly"
                textAlign="center"
        >
            <Link as={motion.a}  
                      aria-label="LinkedIn"
                      href="https://www.linkedin.com/in/peter-camejo/" 
                      whileHover={{scale:1.2}} 
                      isExternal
                >   
                        <Icon as={FaLinkedinIn} boxSize={8} />
                </Link> 
                <Link as={motion.a} 
                      aria-label="Github"
                      href="https://github.com/PeterCamejo" 
                      whileHover={{scale:1.2}} 
                      isExternal
                >
                        <Icon as={FaGithub} boxSize={8}  />
                </Link>
            
                <Link as={motion.a} 
                      aria-label="Codepen"
                      href="https://codepen.io/TheAlexC"  
                      whileHover={{scale:1.2}} 
                      isExternal
                >
                            <Icon as={FaCodepen} boxSize={8}  />
                </Link>

                <Link as={motion.a} 
                      aria-label="Email"
                      href="mailto: pa.camejo@gmail.com" 
                      whileHover={{scale:1.2}} 
                      isExternal
                >
                            <Icon as={FaRegEnvelope} boxSize={8}  />
                </Link>
        </HStack>
    )
}

export default MobileSocialLinks