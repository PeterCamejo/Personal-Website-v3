import {Box, Container, FormControl, FormLabel, Text, FormErrorMessage, FormHelperText, Input, Textarea,Heading, useColorModeValue, Button} from '@chakra-ui/react'
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {

    const [state, handleSubmit] = useForm("xzbogprv");
    
    if(state.succeeded){
        return(
            <div>heh, nice one</div>
        )
    }




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
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <Box mb={3}>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input id='name' type='text' borderColor={useColorModeValue("#ff4500" , '#06fdd8')} />
                            <FormHelperText>(optional)</FormHelperText>
                        </Box>
                        <Box mb={3}>
                            <FormLabel htmlFor='message'>Message</FormLabel>
                            <Textarea borderColor={useColorModeValue("#ff4500" , '#06fdd8')} isRequired></Textarea>
                        </Box>
                        <Button type="submit" disabled={state.submitting} color="black" backgroundColor={useColorModeValue("#FFCF07", '#06fdd8')}>
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </Box>
    )
}

export default ContactSection