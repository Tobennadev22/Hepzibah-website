import About from "../components/About";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import FooterAcknowledge from "../components/FooterAcknowledge";

function AboutMe() {
  return (
    <Box>
      <About />
      <FooterAcknowledge />
      <Footer />
    </Box>
  );
}

export default AboutMe;
