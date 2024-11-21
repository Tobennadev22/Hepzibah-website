import {
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Logo from "../assets/tobymileslogo.png";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram-alt.png";
import linkedin from "../icons/linkedin.png";

const NavLink = ({ children, to = "#", onClick }) => (
  <ChakraLink
    as={ReactRouterLink}
    to={to}
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("lemonColor.100", "gray.900"),
    }}
    onClick={onClick}
  >
    {children}
  </ChakraLink>
);

function Footer() {
  const socials = [
    { icon: facebook, alt: "facebook-icon" },
    { icon: instagram, alt: "instagram-icon" },
    { icon: linkedin, alt: "linkedin-icon" },
  ];

  return (
    <Box
      bgColor={useColorModeValue("#f1f4f8", "gray.700")}
      p="16px"
      as="section"
      px={10}
      pt="48px"
      pb={["20px", "40px", "80px"]}
    >
      <Flex
        direction={["column", "column", "row"]}
        w={["100%", "100%", "1280px"]}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <img src={Logo} alt="Hepzebahcare Logo" width="120px" />
        </Box>
        <Spacer />
        <Box>
          <HStack spacing={8} alignItems="center">
            <HStack
              as="nav"
              spacing={4}
              display={{ base: "block", md: "flex" }}
              fontWeight={400}
              fontSize={["12px", "14px", "16px"]}
              py={["10px", "0px", "0px"]}
            >
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </HStack>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <Flex align="center">
            <Text fontSize={["12px", "14px", "16px"]}>Socials</Text>
            <Flex pl={4}>
              {socials.map((social, index) => (
                <Box key={index} pl={4}>
                  <img
                    src={social.icon}
                    alt={social.alt}
                    width="24px"
                    height="24px"
                  />
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Divider pt="24px" />
      <Text textAlign="center" pt="24px" fontSize={["12px", "14px", "16px"]}>
        All rights reserved. Hepzibah Care 2024
      </Text>
    </Box>
  );
}

export default Footer;
