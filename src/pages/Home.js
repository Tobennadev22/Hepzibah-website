import Header from "../components/Header";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box>
      <Header />
      <Main />
      <Contact />
      <Footer />
    </Box>
  );
}

export default Home;
