import ContactForm from '../ContactForm';
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
             h="100vh" 
             w="100%" 
             backgroundColor={useColorModeValue('#f58c00', '#03002e' )}
        >
            <Container mb={8}>
                <Heading as="h1" mb={5}>Thanks for stopping by!</Heading>
                <Text fontSize={{base:"20px", md:"25px"}}>If you are interested in working with or hiring me, or even just in giving some feedback, feel free to contact me below!</Text>
            </Container>
            <Container display='flex' flexDir="column">
                <ContactForm />
            </Container>
            <MobileSocialLinks />
        </Box>
    )
}

export default ContactSection