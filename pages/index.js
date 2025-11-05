import PortfolioSection from "../components/sections/PortfolioSection"
import LandingSection from "../components/sections/LandingSection"
import ContactSection from "../components/sections/ContactSection"
import Navbar from "../components/navbars/Navbar"
import SocialLinks from "../components/SocialLinks"
import SiteHead from '../components/SiteHead'
import {Box, useColorModeValue} from "@chakra-ui/react"

export default function Website() {
  const bgColor = useColorModeValue('#FF8C42', '#1A2C42' );
  
  return (
    <Box h="100%" w='100%' backgroundColor={bgColor}>
      <SiteHead />
      <Navbar />
      <Box role="main" >
        <LandingSection />
        <PortfolioSection />
        <ContactSection />
        <SocialLinks />
      </Box>
    </Box>
  )
}
