import {
  Box,
  Text,
  Heading,
  Button,
  useColorModeValue,
  Flex,
  Container,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
// import myImage from "../assets/bg-toby.png";
// import { Wave } from "../icons/hands.png";
import { useEffect } from "react";
import faces from "../assets/faces.png";
import myImage from "../assets/thought.png";
// import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const NavLink = ({ children, to = "#", onClick }) => (
  <ChakraLink as={ReactRouterLink} to={to} onClick={onClick}>
    {children}
  </ChakraLink>
);

// Main Header component
function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in",
      once: false, // Animation occurs only once
    });
  }, []);
  return (
    <Box
      // mb={["16px", "16px", "28px"]}
      as="section"
      px={[2, 5, 10]}
      pt="48px"
      pb={["10px", "40px", "140px"]}
      background="bgCustom.900"
      py={["60px"]}
      data-aos="fade-up" // AOS animation
    >
      <Container maxW={["Container: xl"]}>
        <Flex
          direction={["column", "column", "row"]}
          // spacing="20px"
          gap="120px"
          alignItems="center"
          justifyContent="center"
        >
          {/* Main content box with background image */}
          <Box
          // h={[700, 500, 600]}
          // pt={["16px", "32px", "54px"]}
          // px={["4px", "16px", "40px"]}
          // w={["100%", "100%", "1140px"]}
          // marginRight={["0px", "0px", "20px"]}
          >
            <Box
              textAlign={["center", "center", "left"]}
              px={["0px", "16px", "0px"]}
            >
              <Heading
                fontWeight={["light", "medium", "light"]}
                fontSize={["2xl", "3xl", "54px"]}
                pb={[5, 5, 10]}
                width={["100%"]}
                color="gray.100"
              >
                <span className="singleHeadingTextColor">Empowering</span>{" "}
                Individuals
                <br></br> with Disability to <br></br> Achieve Independence,
                <br></br> Dignity, and a Fulfilling<br></br>
                Life
              </Heading>
              <Text
                fontWeight={300}
                fontSize={["sm", "md", "md"]}
                w={["100%", "100%", 600]}
                pt="2"
                color={["gray.200"]}
                textAlign={["center", "center", "left"]}
              >
                We delight in offering Person-Centered services to individuals
                with disability and their caregivers through a Biopsychosocial
                approach, enabling our service users to flourish as they develop
                living skills and rediscover their sense of purpose and
                connection in society
              </Text>
              <Box mt="48px">
                <ChakraLink>
                  <NavLink>
                    <Button
                      // href={"#"}
                      to="/contact"
                      as={ReactRouterLink}
                      _hover={{
                        bg: useColorModeValue("lemonColor.800", "#ffffff"),
                        color: "gray.50",
                        textDecoration: "none",
                      }}
                      bgColor="lemonColor.600"
                      color="#ffffff"
                      w={["158px"]}
                      h={["48px"]}
                    >
                      Get In Touch
                    </Button>
                  </NavLink>
                </ChakraLink>
              </Box>
            </Box>
            <Box pt="64px">
              <Flex
                direction={["column", "column", "row"]}
                justifyContent={["center", "center", "start"]}
                alignItems={["center", "center", "start"]}
              >
                <img
                  src={faces}
                  alt="faces"
                  width={["170px"]}
                  marginRight="14px"
                ></img>
                <Box
                  px={4}
                  py={1}
                  // bgColor="lemonColor.50"
                  color="lemonColor.200"
                  // rounded={10}
                  textAlign="center"
                >
                  We’ve assisted over 1000 persons in 2years
                </Box>
              </Flex>
            </Box>
          </Box>
          {/* Placeholder for additional content */}
          <ImageSection />
        </Flex>
      </Container>
    </Box>
  );
}

// ImageSection component
function ImageSection() {
  return (
    <Box
      h={[300, 400, 600]}
      pt={["32px", "32px", "54px"]}
      px={["16px", "16px"]}
      w={["100%", "100%", 800]}
      display={["block", "none", "block"]}
      // bg="brandblue.200"

      // borderRadius={20}
      backgroundImage={`url(${myImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // className="ekit-fancy-text-animated"

      transition="transform 0.6s ease"
      transformStyle="preserve-3d"
      _hover={{
        transform: " scale(1.05)",
      }}
      // w="100%"
      // h="auto"
      objectFit="cover"
    >
      {/* Additional content can be added here */}
    </Box>
  );
}

export default Header;
