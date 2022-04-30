import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    Box,
    Container,
    IconButton,
    Heading,
    HStack,
    useColorModeValue,
    useBreakpointValue,
  } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import ColorModeButton from './ColorModeButton'
import {motion, useViewportScroll } from 'framer-motion'
import React, {useState, useEffect} from 'react'

const Navbar = () =>{
    const navLogo = useBreakpointValue({base:'PC' , md: 'Peter Camejo'});

    const variants = {
        visible:{opacity: 1, y: 0},
        hidden:{opacity: 0, y:-100}
    }

    const [visible , setVisible] = useState(true);

    const {scrollY} = useViewportScroll();

    function setVisibility(){

        if(scrollY.current < scrollY.prev){
            //Scrolling up, show navbar
            setVisible(true);
        }else if (scrollY.current > 100 && scrollY.current > scrollY.prev){
            //Scrolling down,  hide navbar
            setVisible(false);
        }
    }


    useEffect(()=>{
        return scrollY.onChange(()=> setVisibility());
    });


    

    return(
        <Box position="fixed" 
            as={motion.nav} 
            animate={visible ? "visible" : "hidden"}
            initial={{opacity:0}}
            variants={variants}
            display="flex"
            boxShadow={useColorModeValue("lg" , "dark-lg")}
            p={2}
            flexDir="row" 
            style={{backdropFilter: 'blur(10px)'}}
            top={0} 
            zIndex={5} 
            backgroundColor={useColorModeValue('#f58c0090','#03002e90')} 
            width="full">

            <HStack w="full">
                <Link  w="100%" href="/" _hover={{textDecoration:"none"}}>
                    <Heading as="h1" w="100%">
                        <motion.div  whileHover={{y:-5}}  initial={{opacity:0, x: -20}} animate={{opacity:[0,1], x:[-20,0]}} transition={{delay:0.3, ease: 'easeIn', duration:0.2}}>
                            {navLogo}
                        </motion.div>
                    </Heading>
                </Link>
                <Container textAlign="right">
                    <motion.div initial={{opacity:0, y:20}} animate={{opacity:[0,1], y:[20,0]}} transition={{delay:0.8, type:'spring', bounce:2, duration:0.5}}>
                        <ColorModeButton />
                    </motion.div>
                </Container>
                <HStack  display={{base:"none", md:"flex"}} 
                         alignItems="end" 
                         justifyContent="space-between" 
                         fontSize='25px' 
                         pr='60px'
                >
                    <Link as={motion.a} 
                          href="#landingSection" 
                          whileHover={{y:-5}}   
                          _hover={{textDecoration:"none"}}
                    >
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:[0,1], y:[20,0]}} transition={{delay:1, type:'spring', bounce:2, duration:0.5}}>
                            Introduction
                        </motion.div>
                    </Link>

                    <motion.div initial={{opacity:0, y:20}} animate={{opacity:[0,1], y:[20,0]}} transition={{delay:1, type:'spring', bounce:2, duration:0.5}}>/</motion.div>
                    
                    <Link  as={motion.a} 
                          href="#portfolioSection" 
                          whileHover={{y:-5}}   
                          _hover={{textDecoration:"none"}}
                    >
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:[0,1], y:[20,0]}} transition={{delay:1.3, type:'spring', bounce:1, duration:0.5}}>
                            Projects
                        </motion.div>
                    
                    </Link>
                    
                    <motion.div initial={{opacity:0, y:20}} animate={{opacity:[0,1], y:[20,0]}} transition={{delay:1.3, type:'spring', bounce:2, duration:0.5}}>/</motion.div>
                    
                    <Link as={motion.a} 
                          href="#contactSection" 
                          whileHover={{y:-5}}   
                          _hover={{textDecoration:"none"}}
                    >
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:[0,1], y:[20,0]}} transition={{delay:1.6, type:'spring', bounce:1, duration:0.5}}>
                            Contact
                        </motion.div>
                    </Link>
                </HStack>
                <Box>
                    <motion.div initial={{opacity:0, y:20}} 
                                animate={{opacity:[0,1], y:[20,0]}} 
                                transition={{delay:1.2, type:'spring', bounce:1, duration:0.5}}
                    >
                        <Menu>
                            <motion.div whileHover={{scale: 1.2}}>
                                <MenuButton
                                    display={{base:"flex", md:"none"}}
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                    size="lg"
                                />
                            </motion.div>
                            <MenuList backgroundColor={useColorModeValue('#f58c0099','#03002e99')}
                                      style={{backdropFilter: 'blur(10px)'}}
                            >
                                <Link href="#landingSection" _hover={{textDecoration:"none"}}>
                                    <MenuItem>
                                    Introduction
                                    </MenuItem>
                                </Link>
                                <Link href="#portfolioSection" _hover={{textDecoration:"none"}}>
                                    <MenuItem>
                                        Projects
                                    </MenuItem>
                                </Link>
                                <Link href="#contactSection" _hover={{textDecoration:"none"}}>
                                    <MenuItem>
                                    Contact
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </motion.div>
                </Box>
            </HStack>    
        </Box>
    )
}

export default Navbar