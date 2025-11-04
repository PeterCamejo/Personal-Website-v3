import HomelabNavbar from "../components/navbars/HomelabNavbar"
import SiteHead from '../components/SiteHead'
import {Box, Text , Heading, Image, UnorderedList, ListItem, useColorModeValue, Container, HStack} from '@chakra-ui/react'


export default function Homelab(){
    const bgColor = useColorModeValue('#f58c00', '#03002e' );

    return(
        <Box h="100vh" w="100%" backgroundColor={bgColor} >
            <SiteHead />
            <HomelabNavbar />
            <Container w="100%">
                <Heading as="h1"> Starting out running dedicated servers for myself and gaming friends, my homelab quickly grew to be one of my most beloved projects </Heading>
                <HStack>
                    <Container>
                        <Image alt="Picture of a desktop server" src="/projectImages/homelab.png" boxSize="200px"/>
                        <Text>Server Hardware:</Text>
                        <UnorderedList>
                            <ListItem>CPU/Motherboard</ListItem>
                            <ListItem>32GB DDR4 RAM</ListItem>
                            <ListItem>1TB NVME</ListItem>
                            <ListItem>5 x 4 TB configured in RAID-5 (16TB total)</ListItem>
                            </UnorderedList>
                            <Text>Server Software</Text>
                            <UnorderedList>
                            <ListItem>
                                Docker, running the following containers:
                                <UnorderedList>
                                    <ListItem>Portainer</ListItem>
                                    <ListItem>Sonarr and Radarr</ListItem>
                                    <ListItem>Jackett</ListItem>
                                    <ListItem>Ombi</ListItem>
                                    <ListItem>Qbittorrent</ListItem>
                                    <ListItem>Gluetun</ListItem>
                                    <ListItem>Watchtower</ListItem>
                                </UnorderedList>
                            </ListItem>
                            <ListItem>
                                    VirtualBox, with the following VMs connected in a virtual network:
                                    <UnorderedList>
                                        <ListItem>Security Onion</ListItem>
                                        <ListItem>Kali Linux</ListItem>
                                        <ListItem>Ubuntu Desktop</ListItem>
                                        <ListItem>Windows 11</ListItem>
                                        <ListItem>As well as any VulnHub VMs to attack/monitor and then secure</ListItem>
                                    </UnorderedList>
                            </ListItem>
                        </UnorderedList> 
                    </Container>
                    <Container>
                        <Text> Then there's the networking equipment: </Text>
                        <Image src="/projectImages/homelab1.png" boxSize="200px" />
                        <UnorderedList>
                                <ListItem>AT&T BGW320-500 supplying a 1GB Fiber internet connection in IP-Passthrough mode</ListItem>
                                <ListItem>Edgerouter 4</ListItem>
                                <ListItem>Ubiquiti Unifi 802.11ac PRO Access Point</ListItem>
                                <ListItem>TP-Link 8 Port Gigabit Ethernet Network Switch</ListItem>
                                <ListItem>Raspberry Pi 4 Syslog server</ListItem>
                        </UnorderedList>
                    </Container>
                </HStack>
            </Container>
        </Box>
    )
}