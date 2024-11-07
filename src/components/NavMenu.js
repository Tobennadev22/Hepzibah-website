// import { Link as ReactRouterLink } from "react-router-dom";
// import { Link as ChakraLink } from "@chakra-ui/react";
// // import { Link as ScrollLink } from "react-scroll";
// import Logo from "../assets/tobymileslogo.png";
// import "../styles/Global.css";
// import {
//   Box,
//   Flex,
//   Link,
//   useDisclosure,
//   Stack,
//   IconButton,
//   HStack,
//   useColorModeValue,
//   CloseButton,
//   Button,
// } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("lemonColor.100", "gray.900"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

// const Btn = ({ children }) => (
//   <Button
//     px={2}
//     py={1}
//     width="100px"
//     bgColor="gray.900"
//     color="#ffffff"
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.400", "#ffffff"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Button>
// );

// export default function NavMenu() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box
//         // bg={useColorModeValue("black.900")}
//         // px={20}
//         bg="#fff"
//         position="sticky"
//         top="0"
//         zIndex="1000"
//         p={2}
//         px={10}
//         boxShadow="md"
//         blur={10}
//         opacity={[0.9]}
//       >
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <IconButton
//             size={"md"}
//             icon={isOpen ? <CloseButton /> : <HamburgerIcon />}
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />

//           <Flex direction={["column", "column", "row"]}>
//             <ChakraLink as={ReactRouterLink} to="/" textDecoration="none">
//               <img src={Logo} alt="hepzebahcare Logo" width="120px" />
//             </ChakraLink>
//           </Flex>
//           <HStack spacing={8} alignItems={"center"}>
//             <HStack
//               as={"nav"}
//               spacing={4}
//               display={{ base: "none", md: "flex" }}
//               fontWeight={[600]}
//             >
//               <ChakraLink
//                 as={ReactRouterLink}
//                 to="/"
//                 _hover={{
//                   textDecoration: "none",
//                   bg: useColorModeValue("lemonColor.100", "gray.900"),
//                 }}
//                 px={2}
//                 py={1}
//                 rounded={"md"}
//               >
//                 Home
//               </ChakraLink>
//               <ChakraLink
//                 as={ReactRouterLink}
//                 to="/about"
//                 _hover={{
//                   textDecoration: "none",
//                   bg: useColorModeValue("lemonColor.100", "gray.900"),
//                 }}
//                 px={2}
//                 py={1}
//                 rounded={"md"}
//               >
//                 About Us
//               </ChakraLink>
//               <ChakraLink
//                 as={ReactRouterLink}
//                 to="/services"
//                 smooth="true"
//                 duration={800}
//                 cursor="pointer"
//                 _hover={{
//                   textDecoration: "none",
//                   bg: useColorModeValue("lemonColor.100", "gray.900"),
//                 }}
//                 px={2}
//                 py={1}
//                 rounded={"md"}
//               >
//                 Services
//               </ChakraLink>
//               <NavLink>Contact Us</NavLink>
//               <Btn>English</Btn>
//             </HStack>
//           </HStack>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: "none" }} h="100vh">
//             <Stack as={"nav"} spacing={4}>
//               <ChakraLink
//                 as={ReactRouterLink}
//                 to="/"
//                 px={2}
//                 py={1}
//                 rounded={"md"}
//               >
//                 Home
//               </ChakraLink>
//               <ChakraLink
//                 as={ReactRouterLink}
//                 to="/about"
//                 px={2}
//                 py={1}
//                 rounded={"md"}
//               >
//                 About Us
//               </ChakraLink>
//               <ChakraLink
//                 as={ReactRouterLink}
//                 to="/services"
//                 smooth="true"
//                 duration={500}
//                 cursor="pointer"
//                 px={2}
//                 py={1}
//                 rounded={"md"}
//               >
//                 Services
//               </ChakraLink>
//               <NavLink>Contact Us</NavLink>
//               <Btn>English</Btn>
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
//     </>
//   );
// }

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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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

const Btn = ({ children }) => (
  <Button
    px={4}
    py={2}
    bgColor="gray.900"
    color="white"
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
      bg="#fff"
      position="sticky"
      top="0"
      zIndex="1000"
      p={4}
      boxShadow="md"
      opacity={0.9}
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
          <img src={Logo} alt="Logo" width="100px" />
        </ChakraLink>

        <HStack spacing={4} alignItems="center">
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
            fontWeight="600"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <Btn>English</Btn>
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
            <Btn>English</Btn>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
