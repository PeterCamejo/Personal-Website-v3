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
                      href="https://www.linkedin.com/in/peter-camejo-908472110/" 
                      whileHover={{scale:1.2}} 
                      isExternal
                >   
                        <Icon as={FaLinkedinIn} boxSize={8} />
                </Link> 
                <Link as={motion.a} 
                      href="https://github.com/PeterCamejo" 
                      whileHover={{scale:1.2}} 
                      isExternal
                >
                        <Icon as={FaGithub} boxSize={8}  />
                </Link>
            
                <Link as={motion.a} 
                      href="https://codepen.io/TheAlexC"  
                      whileHover={{scale:1.2}} 
                      isExternal
                >
                            <Icon as={FaCodepen} boxSize={8}  />
                </Link>

                <Link as={motion.a} 
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