import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import FooterAcknowledge from "../components/FooterAcknowledge";

function Home() {
  return (
    <Box>
      <Header />
      <Main />
      <FooterAcknowledge />
      <Footer />
    </Box>
  );
}

export default Home;
