import { Box, Text, Button, useColorModeValue } from "@chakra-ui/react";
import ExploreImage from "../assets/disabledperson.jpg";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const NavLink = ({ children, to = "#", onClick }) => (
  <ChakraLink as={ReactRouterLink} to={to} onClick={onClick}>
    {children}
  </ChakraLink>
);

function ExploreSection() {
  return (
    <Box
      w="100%"
      h="400px"
      bgImage={`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${ExploreImage})`}
      bgSize="cover"
      bgPosition="center"
      backgroundAttachment="fix"
      // bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={8}
    >
      <Text
        fontSize={["24px", "24px", "32px"]}
        lineHeight={["24px", "24px", "38px"]}
        fontWeight={["bold", "semibold", "light"]}
        color="#ffffff"
        textAlign="center"
      >
        Explore our services and discover how we can walk alongside <br /> you
        at every stage of life.
        <Box mt="24px">
          <ChakraLink>
            <NavLink>
              <Button
                // href={"#"}
                to="/services"
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
                Learn more
              </Button>
            </NavLink>
          </ChakraLink>
        </Box>
      </Text>
    </Box>
  );
}

export default ExploreSection;
