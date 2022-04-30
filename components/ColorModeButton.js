import {FaRegSnowflake , FaSun} from 'react-icons/fa'
import { IconButton, Icon, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion';

const ColorModeButton  = () =>{
    const {colorMode, toggleColorMode} = useColorMode();
    const bg = useColorModeValue('#03002e', '#f58c00' );

    return(
            <AnimatePresence initial={false} exitBeforeEnter>
                    <IconButton icon={<Icon as={useColorModeValue(FaRegSnowflake , FaSun)} />}
                                as={motion.button}
                                initial={{y:-20, opacity:0}} 
                                animate={{y:0, opacity:1}} 
                                exit={{y:20, opacity: 0}}
                                transition={{duration:0.2}}
                                whileHover={{scale:1.2}}
                                onClick={toggleColorMode}
                                size="lg"
                                fontSize="3xl"
                                color={useColorModeValue('#f58c00', '#03002e' )}
                                boxShadow={useColorModeValue("lg","dark-lg")}
                                backgroundColor ={useColorModeValue('#03002e', '#f58c00' )}
                                _hover={{backgroundColor : bg}}></IconButton>
            </AnimatePresence>
    )
}

export default ColorModeButton