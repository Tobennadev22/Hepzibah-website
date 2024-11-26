import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import myImage from "../assets/AboutImage.png";
// import visionIcon from "../icons/healthcare2.png";
// import missionIcon from "../icons/care.png";
// import approachIcon from "../icons/emotional-health.png";

import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const NavLink = ({ children, to = "#", onClick }) => (
  <ChakraLink as={ReactRouterLink} to={to} onClick={onClick}>
    {children}
  </ChakraLink>
);

// Main Header component
function About() {
  return (
    <Box as="section">
      <HeaderContent />
      <CardDescription />
      <CoreValue />
    </Box>
  );
}

function HeaderContent() {
  return (
    <Flex
      direction={["column", "column", "row"]}
      spacing="20px"
      px={[2, 5, 10]}
      bg="bgCustomA.600"
      py={["40px"]}
    >
      {/* Main content box with background image */}
      <Box
        h={["100%", "100%", 600]}
        pt={["16px", "32px", "54px"]}
        px={["4px", "16px", "40px"]}
        w={["100%", "100%", 1140]}
        borderRadius={20}
        // backgroundImage={`url(${myImage})`}
        mx="auto"
        marginRight={["0px", "0px", "20px"]}
      >
        <Box
          textAlign={["center", "center", "left"]}
          px={["0px", "16px", "24px"]}

          // pt="48px"
        >
          <Heading
            fontWeight={["light", "medium", "light"]}
            fontSize={["2xl", "3xl", "54px"]}
            pb={[2, 5, 10]}
            width={["100%"]}
            color="gray.700"
          >
            About Us
          </Heading>
          <Text
            fontWeight={300}
            fontSize={["sm", "md", "md"]}
            w={["100%", "100%", 600]}
            pt="2"
            color="gray.600"
            textAlign={["center", "center", "left"]}
            pb="32px"
          >
            Hepzibah Care is a not-for-profit organisation dedicated to
            delivering Holistic Person-Centred services rooted in a
            Biopsychosocial model of care. Operating under the Disability
            Services and Inclusion Act 2023, Our service providers passionately
            advocate for clients’ holistic needs ensuring they are given equal
            opportunities and access to services and resources necessary to
            reach their full potential; as we firmly believe that individuals
            with disabilities have the right and capabilities to be active
            participants in society, develop autonomy and live fulfilling lives
            with dignity and independence
          </Text>

          <Box mt="32px">
            <NavLink>
              <ChakraLink>
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
              </ChakraLink>
            </NavLink>
          </Box>
        </Box>
      </Box>
      {/* Placeholder for additional content */}
      <ImageSection />
    </Flex>
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
      // borderRadius={20}
      backgroundImage={`url(${myImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // className="ekit-fancy-text-animated"
    >
      {/* Additional content can be added here */}
    </Box>
  );
}

function CardDescription() {
  return (
    <Box mt="80px" px={[2, 5, 10]} pb={["32px", "48px", "80px"]}>
      <Flex
        direction={["column", "column", "row"]}
        spacing={4}
        justify="center"
        align="center"
      >
        <Box
          bgColor="specialColor.400"
          w={["100%", "100%", "407px"]}
          h={["100%", "100%", "473px"]}
          p={4}
          textAlign={["center"]}
          borderRadius={10}
          marginRight={[0, 0, 5]}
          mb={["24px", "0px", "0px"]}
        >
          {/* <img src={visionIcon} width={["64px"]} alt="visionIcon" /> */}
          <Text fontSize="24px" fontWeight={400} py="12px">
            Our Vision
          </Text>
          <Text fontWeight={300}>
            Hepzibah Care is a not-for-profit organisation committed to
            implementing a person-centred approach, by way of, advocacy to
            participants and their caregivers empowering them to achieve their
            full potential. We are devoted to supporting service users while
            assisting them to participate successfully and confidently as they
            integrate within the community.
          </Text>
        </Box>
        <Box
          bgColor="specialColor.400"
          w={["100%", "100%", "407px"]}
          h="473px"
          p={4}
          textAlign={["center"]}
          borderRadius={10}
          marginRight={[0, 0, 5]}
          mb={["24px", "0px", "0px"]}
        >
          {/* <Box mx="auto">
            <img src={missionIcon} width={["64px"]} alt="missionIcon" />
          </Box> */}
          <Text fontSize="24px" fontWeight={400} py="12px">
            Our Mission
          </Text>
          <Text fontWeight={300}>
            To provide unique and friendly support to persons living with
            disability and their families, and inspire our service users to
            delight in themselves by finding a sense of purpose and identity in
            society
          </Text>
        </Box>
        <Box
          bgColor="gray.50"
          w={["100%", "100%", "407px"]}
          h="473px"
          p={4}
          textAlign={["center"]}
          borderRadius={10}
          mb={["24px", "0px", "0px"]}
        >
          {/* <img src={approachIcon} width={["64px"]} alt="approchicon" /> */}
          <Text fontSize="24px" fontWeight={400} py="12px">
            Our Approach
          </Text>
          <Text fontWeight={300}>
            At Hepzibah Care, our approach is rooted in the Biopsychosocial
            model of care, ensuring that we address the physical, psychological,
            and social needs of every client. This holistic framework allows us
            to create customized care plans that promote well-being across all
            aspects of life. We believe in building strong, collaborative
            relationships with our clients, their caregivers and stakeholders to
            deliver the best outcomes.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

function CoreValue() {
  return (
    <Box
      bgColor="#F5FCFF"
      w="100%"
      px={[1, 5, "250px"]}
      py={4}
      textAlign={["center", "left", "left"]}
    >
      <Box>
        <Text
          fontSize={["24px", "24px", "48px"]}
          fontWeight={["bold", "semibold", "light"]}
          py={4}
        >
          Our Core Values
        </Text>
        <Text fontSize={["14px", "16px", "18px"]} mb={["32px", "48px", "80px"]}>
          Our core values reflect our commitment to providing compassionate,
          high-quality support services:
        </Text>
      </Box>
      <Flex direction={["column", "column", "row"]} mb={5}>
        <Box
          bgColor="specialColor.400"
          width={["100%", "100%", "630px"]}
          height={"100%"}
          p={6}
          borderRadius={10}
          marginRight={5}
          marginBottom={5}
          boxShadow="2xl"
          cursor="pointer"
          transition="transform 0.5s ease-in-out"
          _hover={{
            // transform: "scale(1.15)", // Adjust the scale as needed
            transform: "rotateY(20deg)",
            boxShadow: "lg",
          }}
          style={{ perspective: "1000px" }}
        >
          <Text
            fontSize={["18px", "18px", "24px"]}
            fontWeight={[400]}
            pb={["8px"]}
          >
            Empathy & Collaboration
          </Text>
          <Text fontSize={["14px", "16px", "16px"]} fontWeight={400}>
            We listen to our clients, understand their needs, and work closely
            with them and their caregivers to achieve positive outcomes.
          </Text>
        </Box>
        <Box
          bgColor="#ffffff"
          width={["100%", "100%", "630px"]}
          height={"100%"}
          p={6}
          borderRadius={10}
          boxShadow="2xl"
          cursor="pointer"
          transition="transform 0.5s ease-in-out"
          _hover={{
            // transform: "scale(1.15)", // Adjust the scale as needed
            transform: "rotateY(20deg)",
            boxShadow: "lg",
          }}
          style={{ perspective: "1000px" }}
        >
          <Text
            fontSize={["18px", "18px", "24px"]}
            fontWeight={[400]}
            pb={["8px"]}
          >
            Diversity
          </Text>
          <Text fontSize={["14px", "16px", "16px"]} fontWeight={400}>
            Our services are inclusive and accessible to all, regardless of
            background, culture, or ability, ensuring no one is left behind.
          </Text>
        </Box>
      </Flex>

      {/* Second Role of content */}

      <Flex direction={["column", "column", "row"]} mb={5}>
        <Box
          bgColor="#ffffff"
          width={["100%", "100%", "630px"]}
          height={"100%"}
          p={6}
          borderRadius={10}
          boxShadow="2xl"
          marginRight={5}
          marginBottom={5}
          cursor="pointer"
          transition="transform 0.5s ease-in-out"
          _hover={{
            // transform: "scale(1.15)", // Adjust the scale as needed
            transform: "rotateY(20deg)",
            boxShadow: "lg",
          }}
          style={{ perspective: "1000px" }}
        >
          <Text
            fontSize={["18px", "18px", "24px"]}
            fontWeight={[400]}
            pb={["8px"]}
          >
            Respect
          </Text>
          <Text fontSize={["14px", "16px", "16px"]} fontWeight={400}>
            We treat everyone with dignity and honour, recognising and valuing
            their individuality and rights
          </Text>
        </Box>
        <Box
          bgColor="#ffffff"
          width={["100%", "100%", "630px"]}
          height={"100%"}
          p={6}
          borderRadius={10}
          boxShadow="2xl"
          cursor="pointer"
          transition="transform 0.5s ease-in-out"
          _hover={{
            // transform: "scale(1.15)", // Adjust the scale as needed
            transform: "rotateY(20deg)",
            boxShadow: "lg",
          }}
          style={{ perspective: "1000px" }}
        >
          <Text
            fontSize={["18px", "18px", "24px"]}
            fontWeight={[400]}
            pb={["8px"]}
          >
            Quality
          </Text>
          <Text fontSize={["14px", "16px", "16px"]} fontWeight={400}>
            We are committed to delivering high-quality services and
            continuously improving our programs to meet the changing needs of
            our clients.
          </Text>
        </Box>
      </Flex>
      {/* 
      Third Role of content */}

      <Flex direction={["column", "column", "row"]} mb={5}>
        <Box
          bgColor="#ffffff"
          width={["100%", "100%", "630px"]}
          height={"100%"}
          p={6}
          borderRadius={10}
          boxShadow="2xl"
          marginRight={5}
          marginBottom={5}
          cursor="pointer"
          transition="transform 0.5s ease-in-out"
          _hover={{
            // transform: "scale(1.15)", // Adjust the scale as needed
            transform: "rotateY(20deg)",
            boxShadow: "lg",
          }}
          style={{ perspective: "1000px" }}
        >
          <Text
            fontSize={["18px", "18px", "24px"]}
            fontWeight={[400]}
            pb={["8px"]}
          >
            Integrity & Accountability
          </Text>
          <Text fontSize={["14px", "16px", "16px"]} fontWeight={400}>
            We uphold transparency and responsibility in all our actions,
            ensuring our services are delivered honestly and efficiently.
          </Text>
        </Box>
        <Box
          bgColor="#ffffff"
          width={["100%", "100%", "630px"]}
          height={"100%"}
          p={6}
          borderRadius={10}
          boxShadow={"2xl"}
          cursor="pointer"
          transition="transform 0.5s ease-in-out"
          _hover={{
            // transform: "scale(1.15)", // Adjust the scale as needed
            transform: "rotateY(20deg)",
            boxShadow: "lg",
          }}
          style={{ perspective: "1000px" }}
        >
          <Text
            fontSize={["18px", "18px", "24px"]}
            fontWeight={[400]}
            pb={["8px"]}
          >
            Advocacy
          </Text>
          <Text fontSize={["14px", "16px", "16px"]} fontWeight={400}>
            We advocate for the rights of our clients, ensuring their voices are
            heard and their needs are met within the broader community and care
            systems.
          </Text>
        </Box>
      </Flex>

      {/*Fourth Role of content */}

      <Flex direction={["column", "column", "row"]} mb={5}>
        <Box
          bgColor="#ffffff"
          width={["100%", "100%", "630px"]}
          height={"100%"}
          p={6}
          borderRadius={10}
          boxShadow="2xl"
          marginRight={5}
          cursor="pointer"
          transition="transform 0.5s ease-in-out"
          _hover={{
            // transform: "scale(1.15)", // Adjust the scale as needed
            transform: "rotateY(20deg)",
            boxShadow: "lg",
          }}
          style={{ perspective: "1000px" }}
        >
          <Text
            fontSize={["18px", "18px", "24px"]}
            fontWeight={[400]}
            pb={["8px"]}
          >
            Empowerment
          </Text>
          <Text fontSize={["14px", "16px", "16px"]} fontWeight={400}>
            We encourage individuals to take control of their lives, supporting
            them to make informed decisions and achieve personal growth.
          </Text>
        </Box>
        <Box
          // bgColor="#ffffff"
          width={["100%", "100%", "630px"]}
          height={["100%", "100%", "145px"]}
          p={6}
          borderRadius={10}
        >
          {/* <Text fontSize={["24px"]} fontWeight={[600]}>
      Advocacy
    </Text>
    <Text>
      We advocate for the rights of our clients, ensuring their voices are
      heard and their needs are met within the broader community and care
      systems.
    </Text> */}
        </Box>
      </Flex>
    </Box>
  );
}
export default About;
