import {Box, Container, Text , Heading, Image, UnorderedList, ListItem} from '@chakra-ui/react'


export default function Homelab(){

    return(
        <Box h="100vh" w="100%">
               <Heading as="h1"> Hey there! This page is a work in progress while I focus on finding a job. </Heading>
               <Text> For now, here are some pics and specs</Text>
               <Text> Intro: &quot;Starting out running dedicated servers for myself and gaming friends, my homelab quickly grew to be one of my most beloved projects&quot;</Text>
               <Image alt="Picture of a desktop server"></Image>
               <UnorderedList>
                   <ListItem>CPU/Motherboard</ListItem>
                   <ListItem>32GB RAM</ListItem>
                   <ListItem>6 x 4 TB configured in RAID-5</ListItem>
                   <ListItem>Raspberry Pi 4 running PiHole for ad-blocking at the DNS level</ListItem>
                   <ListItem>
                       Docker, running the following containers
                       <UnorderedList>
                        <ListItem>Plex Media Server</ListItem>
                        <ListItem>Grafana</ListItem>
                        <ListItem>Sonarr and Radarr</ListItem>
                        <ListItem>Jackett</ListItem>
                        <ListItem>Ombi</ListItem>
                        <ListItem>Qbittorrent</ListItem>
                        <ListItem>Gluetun</ListItem>
                       </UnorderedList>
                   </ListItem>
               </UnorderedList>
               
        </Box>
    )
}