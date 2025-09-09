import { Link as ReactRouterLink } from "react-router-dom";

import { Link as ChakraLink } from "@chakra-ui/react";
import Logo from "../assets/tobymileslogo.png";
import "../styles/Global.css";
import {
  Box,
  Flex,

  // Link,
  useDisclosure,
  Stack,
  IconButton,
  HStack,
  useColorModeValue,
  CloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import AustralianFlag from "../icons/Australia.png";

const NavLink = ({ children, to = "#", onClick }) => (
  <ChakraLink
    as={ReactRouterLink}
    to={to}
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("lemonColor.50", "gray.900"),
    }}
    _activeLink={{ color: "teal.500", fontWeight: "bold" }}
    onClick={onClick}
  >
    {children}
  </ChakraLink>
);

const Btn = ({ children }) => (
  <Button
    px={4}
    py={2}
    bgColor="#f9f9f9"
    color="gray-800"
    border="1px solid #ccc"
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.400", "gray.800"),
    }}
  >
    {children}
  </Button>
);

export default function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      // bg="#fff"
      bg="rgba(255, 255, 255, 0.2)"
      position="sticky"
      top="0"
      zIndex="1000"
      px={8}
      boxShadow="md"
      backdropFilter="blur(10px)"
      // opacity={0.9}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseButton /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: "inline-flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <ChakraLink as={ReactRouterLink} to="/" textDecoration="none">
          <img src={Logo} alt="Logo" width="150px" />
        </ChakraLink>

        <HStack spacing={4} alignItems="center">
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
            fontWeight="400"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink
              to="/about"
              _activeLink={{ color: "teal.500", fontWeight: "bold" }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              _activeLink={{ color: "teal.500", fontWeight: "bold" }}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              _activeLink={{ color: "teal.500", fontWeight: "bold" }}
            >
              Contact Us
            </NavLink>
            <HStack>
              <img src={AustralianFlag} alt="australian-flag" width={24} />
              <Text>En-Au</Text>
            </HStack>
          </HStack>
        </HStack>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <NavLink to="/" onClick={onClose}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={onClose}>
              About Us
            </NavLink>
            <NavLink to="/services" onClick={onClose}>
              Services
            </NavLink>
            <NavLink to="/contact" onClick={onClose}>
              Contact Us
            </NavLink>
            <Btn>En-Au</Btn>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
