import {Box, Text, Heading, useColorModeValue} from "@chakra-ui/react"
import { motion } from "framer-motion"

const LandingSection = () =>{

    return(
    <Box id="landingSection"  
         display="flex" 
         p="60px" 
         backgroundColor={useColorModeValue('#f58c00', '#03002e' )}  
         h='100vh' 
         w='100%' 
         justifyContent="start" 
         alignItems="center" 
    >
        <Box w="4xl" ml={{base:"0", lg:"25%"}}>
         {/* <motion.div initial = {{opacity:0}} animate={{opacity:[0,1]}} transition={{delay:2.5,  duration:0.5}}>  
                <Text fontSize={{base:'16px' , md: '25px'}}>   
                    Hi, I&apos;m
                </Text>    
            </motion.div>  
        */}    
            <motion.div initial = {{opacity:0}} animate={{opacity:[0,1]}} transition={{delay:2.5,  duration:0.5}}>
                <Heading as="h1" size="4xl" mb={5} >Peter Camejo</Heading>
            </motion.div>
            <motion.div initial = {{opacity:0}} animate={{opacity:[0,1]}} transition={{delay:3.3,  duration:0.5}}>
                <Text fontSize={{base:'20px' , md: "30px"}} 
                      w="fit-content" 
                      color="black" 
                      p={3} 
                      mb={3} 
                      rounded="lg" 
                      backgroundColor={useColorModeValue("#FFCF07", '#06fdd8')}
                >
                    An information security professional based in Atlanta, GA
                </Text>
                <Text w="100%" fontSize={{base:"16px" , md: "25px"}}>I am a highly driven, Security+ certified information security professional actively seeking employment in cybersecurity remotely or in the Atlanta area.
                    Always eager to apply my skills, daily studies, and free time to all things infosec, I would love nothing more than to work on new and testing challenges with a dedicated and improvment-focused team.
                </Text>
            </motion.div>
        </Box>
    </Box>
    )
}

export default LandingSection