import HomelabNavbar from "../components/navbars/HomelabNavbar"
import SiteHead from '../components/SiteHead'
import {Box, Text, Button, Menu, Stack, Heading, Image, VStack, useColorModeValue, Container, HStack, MenuList, MenuItem, MenuButton} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'


export default function Homelab(){
    const bgColor = useColorModeValue('#f58c00', '#03002e' );

    return(
        <Box h="100vh" w="100%" centerContent backgroundColor={bgColor}  >
            <SiteHead />
            <HomelabNavbar />
            <Container w="100%" h="100%" display='flex' justifyContent='center' alignItems='center'>
                <Stack
                    direction = {['column', null, 'row']}
                >
                    <VStack>
                        //Homelab picture and specs
                        <Box>MEOW</Box>
                    </VStack>
                    <VStack>
                        //Homelab projects
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                                Project
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Description</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                                Project
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Description</MenuItem>
                            </MenuList>
                        </Menu><Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                                Project
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Description</MenuItem>
                            </MenuList>
                        </Menu>                    
                    </VStack>
                </Stack>           
            </Container>
        </Box>
    )
}