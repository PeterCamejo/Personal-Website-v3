import React from 'react'
import {Box, useColorModeValue, FormControl, FormLabel, FormHelperText, Input, Textarea} from "@chakra-ui/react"
import { motion } from 'framer-motion'


const ContactForm = () => {


    return(
    <form action="https://formspree.io/f/xnqwogbr" method="POST">
        <FormControl>
            <Box mb={3}>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input id='name' 
                       type='text' 
                       name='name'
                       borderColor={useColorModeValue("#ff4500" , '#06fdd8')} 
                />
                <FormHelperText>(optional)</FormHelperText>
            </Box>
            <Box mb={3}>
                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea id="message" 
                          borderColor={useColorModeValue("#ff4500" , '#06fdd8')} 
                          name='message' 
                          isRequired>
                </Textarea>
            </Box>
            <Box as={motion.button} 
                 rounded="md" 
                 whileHover={{scale:1.2}} 
                 whileTap={{scale: 0.9}} 
                 p={2} 
                 type="submit" 
                 color="black" 
                 backgroundColor={useColorModeValue("#FFCF07", '#06fdd8')}
            >
                Submit
            </Box>
        </FormControl>
    </form>
    )
}

export default ContactForm