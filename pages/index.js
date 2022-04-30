import PortfolioSection from "../components/sections/PortfolioSection"
import LandingSection from "../components/sections/LandingSection"
import ContactSection from "../components/sections/ContactSection"
import Navbar from "../components/Navbar"
import SocialLinks from "../components/SocialLinks"
import {Box, useColorModeValue} from "@chakra-ui/react"

export default function Website() {

  return (
    <Box h="100%" w='100%' backgroundColor={useColorModeValue('#f58c00', '#03002e' )}>
      <Navbar />
      <Box>
        <LandingSection />
        <PortfolioSection />
        <ContactSection />
        <SocialLinks />
      </Box>
    </Box>
  )
}
