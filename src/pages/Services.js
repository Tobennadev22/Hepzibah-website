import { Box } from "@chakra-ui/react";
import Service from "../components/Service";
import Footer from "../components/Footer";
import FooterAcknowledge from "../components/FooterAcknowledge";

function Services() {
  return (
    <Box>
      <Service />
      <FooterAcknowledge />
      <Footer />
    </Box>
  );
}

export default Services;
