import MobileSocialLinks from '../MobileSocialLinks';
import {Box, Container, Text,Heading, useColorModeValue} from '@chakra-ui/react'

const ContactSection = () => {

    return(
        <Box id="contactSection"
             display="flex" 
             flexDir="column" 
             justifyContent="center" 
             p={"30px"}
             alignItems="center"
             h="50vh" 
             w="100%" 
             backgroundColor={useColorModeValue('#FF8C42', '#1A2C42' )}
        >
            <Container maxW='container.md' mb={8} centerContent>
                <Heading as="h1" mb={5}>Thanks for stopping by!</Heading>
                <Text fontSize={{base:"20px", md:"25px"}}>If you are interested in working with me, hiring me, providing feedback, or even just chatting with me about anything related to cybersecurity, feel free to contact me on social media or email me at pa.camejo@gmail.com!</Text>
            </Container>
            <MobileSocialLinks />
        </Box>
    )
}

export default ContactSection