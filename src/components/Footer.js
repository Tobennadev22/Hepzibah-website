// import {
//   Box,
//   Divider,
//   Flex,
//   Link,
//   Spacer,
//   Text,
//   HStack,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { Link as ChakraLink } from "@chakra-ui/react";
// import { Link as ReactRouterLink } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import Logo from "../assets/tobymileslogo.png";
// import facebook from "../icons/facebook.png";
// import instagram from "../icons/instagram-alt.png";
// import linkedin from "../icons/linkedin.png";

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("lemonColor.200", "gray.900"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

// function Footer() {
//   return (
//     <Box
//       bgColor={"#f1f4f8"}
//       p={"16px"}
//       //   mx="auto"
//       //   mb={["16px", "16px", "28px"]}
//       as="section"
//       px={10}
//       pt="48px"
//       pb={["20px", "40px", "80px"]}
//     >
//       <Flex
//         direction={["column", "column", "row"]}
//         spacing={20}
//         // mx={"auto"}
//         w={["100%", "100%", "1280px"]}
//         justifyContent={"center"}
//         alignItems={"center"}
//       >
//         <Box>
//           <img src={Logo} alt="Hepzebahcare Logo" width="120px" />
//         </Box>
//         <Spacer />
//         <Box>
//           <HStack spacing={8} alignItems={"center"}>
//             <HStack
//               as={"nav"}
//               spacing={4}
//               display={{ base: "block", md: "flex" }}
//               fontWeight={[400]}
//             >
//               {/* <ChakraLink
//                 as={ReactRouterLink}
//                 to="/"
//                 _hover={{
//                   textDecoration: "none",
//                   bg: useColorModeValue("lemonColor.200", "gray.900"),
//                 }}
//                 px={2}
//                 py={1}
//                 rounded={"md"}
//               >
//                 Home
//               </ChakraLink> */}
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
//                 as={ScrollLink}
//                 to="project-section"
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
//             </HStack>
//           </HStack>
//         </Box>
//         <Spacer />
//         <Box>
//           <Flex>
//             <Text>Socials</Text>
//             <Flex>
//               <Box pl={4}>
//                 <img
//                   src={facebook}
//                   alt="facebook-icon"
//                   width="24px"
//                   height="24px"
//                 ></img>
//               </Box>
//               <Box pl={4}>
//                 <img
//                   src={instagram}
//                   alt="instagram-icon"
//                   width="24px"
//                   height="24px"
//                 ></img>
//               </Box>
//               <Box pl={4}>
//                 {" "}
//                 <img
//                   src={linkedin}
//                   alt="linkedin-icon"
//                   width="24px"
//                   height="24px"
//                 ></img>
//               </Box>
//             </Flex>
//           </Flex>
//         </Box>
//       </Flex>
//       <Box pt="24px">
//         <Divider />
//       </Box>
//       <Text textAlign={["center"]} pt="24px">
//         All copyright reserved. Hepzibah care 2024
//       </Text>
//     </Box>
//   );
// }

// export default Footer;

import {
  Box,
  Divider,
  Flex,
  Link,
  Spacer,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/tobymileslogo.png";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram-alt.png";
import linkedin from "../icons/linkedin.png";

const NavLink = ({ children, to, as = ChakraLink, isScrollLink }) => (
  <Link
    as={isScrollLink ? ScrollLink : as}
    to={to}
    px={2}
    py={1}
    rounded={"md"}
    smooth={isScrollLink ? true : undefined}
    duration={isScrollLink ? 800 : undefined}
    cursor={isScrollLink ? "pointer" : undefined}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("lemonColor.200", "gray.900"),
    }}
  >
    {children}
  </Link>
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
              <NavLink as={ReactRouterLink} to="/about">
                About Us
              </NavLink>
              <NavLink to="project-section" isScrollLink>
                Services
              </NavLink>
              <NavLink href="#">Contact Us</NavLink>
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
