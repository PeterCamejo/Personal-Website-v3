import Project from "./Project"
import projects from "../public/data/projects"
import otherProjects from "../public/data/otherProjects"
import {motion} from "framer-motion"
import { Box, Text, Center, Stack, Heading, useColorModeValue} from "@chakra-ui/react"
import OtherProject from "./OtherProject"
import ReverseProject from "./ReverseProject"


const PortfolioSection = () =>{
    const projectHrefs = ["https://github.com/PeterCamejo",
                          "https://codepen.io/TheAlexC",
                          "https://twitter.com/TheAlexC" //TODO Change to homelab.petercamejo.com
                          ]


    return (
        <Center id="portfolioSection" 
                h="100%" 
                w="100%" 
                display="flex" 
                p={"60px"} 
                mt={{base:"100px", md:0}} 
                flexDir="column"  
                backgroundColor={useColorModeValue('#f58c00', '#03002e' )}  >

          {projects.map((project, index)=>{
            if(index % 2 !== 0){
              return (
                <ReverseProject projectTitle={project.projectTitle} 
                        projectDescription={project.projectDescription}
                        projectImage={project.projectImage}
                        badges={project.badges}
                        githubLink={project.githubLink}
                        demoLink={project.demoLink}
                        key={index}
                />
              )
            }else{
            return (
                <Project projectTitle={project.projectTitle} 
                        projectDescription={project.projectDescription}
                        projectImage={project.projectImage}
                        badges={project.badges}
                        githubLink={project.githubLink}
                        demoLink={project.demoLink}
                        key={index}
                />
            )
            }
          })
          }
          {/* //h={{base:"100vh", xl:"auto"}}  */}
            <Heading as="h1" w="100%" textAlign="center" mb={10}>Other Projects and Code</Heading>
            <Stack h="auto"
                   w={{xl:"70%"}}  
                   direction={{base:'column', xl:'row'}} 
                   justifyContent={{base:"start", xl:"center"}}
                   alignItems="center"
            >
              {otherProjects.map((project, index)=>{
                return (
                  <Box as={motion.div} whileHover={{y:-10, x:-5}}>
                    <OtherProject projectTitle={project.projectTitle}
                                  projectDescription={project.projectDescription}
                                  badges={project.badges}
                                  key={index}
                                  projectIndex={index}
                                  projectHref={projectHrefs[index]}
                    />
                  </Box>
                )
              })
              }


            </Stack>
        </Center>
  )
}

export default PortfolioSection