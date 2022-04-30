import PortfolioSection from "../components/sections/PortfolioSection"
import LandingSection from "../components/sections/LandingSection"
import ContactSection from "../components/sections/ContactSection"
import Navbar from "../components/Navbar"
import SocialLinks from "../components/SocialLinks"
import MobileSocialLinks from "../components/MobileSocialLinks"
import {Box, useColorModeValue} from "@chakra-ui/react"

export default function Website() {
  const bgColor = useColorModeValue('#f58c00', '#03002e' );
  
  return (
    <Box h="100%" w='100%' backgroundColor={bgColor}>
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
