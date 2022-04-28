import {Box, Container, FormControl, FormLabel, Text, FormErrorMessage, FormHelperText, Input, Textarea,Heading, useColorModeValue} from '@chakra-ui/react'


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
            <Container mb={10}>
                <Heading as="h1" mb={5}>Thanks for stopping by!</Heading>
                <Text fontSize="25px">If you are interested in working with or hiring me, or even just in giving some feedback, feel free to contact me below!</Text>
            </Container>
            <Container>
                <FormControl>
                    <Box mb={3}>
                        <FormLabel htmlFor='email'>Name</FormLabel>
                        <Input id='email' type='email' borderColor={useColorModeValue("#ff4500" , '#06fdd8')} />
                        <FormHelperText>(optional)</FormHelperText>
                    </Box>
                    <Box mb={3}>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' borderColor={useColorModeValue("#ff4500" , '#06fdd8')} />
                        <FormHelperText>(optional)</FormHelperText>
                    </Box>
                    <Box mb={3}>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Textarea borderColor={useColorModeValue("#ff4500" , '#06fdd8')}></Textarea>
                    </Box>
                </FormControl>
            </Container>
        </Box>
    )
}

export default ContactSection