import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import disableimg from "../assets/img-section.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 300, // Trigger animation when 200px in viewport
      easing: "ease-in-out",
      once: false, // Animation occurs only once
    });
  }, []);
  return (
    <Box
      mb={["16px", "16px", "28px"]}
      as="section"
      px={[2, 5, "100px"]}
      pt={["40px", "80px", "80px"]}
      pb={["240px"]}
      w={["100%"]}
      h={["1400px", 600, 1000]}
      bg="#F5FCFF"
      data-aos="fade-right" // AOS animation
    >
      <Flex
        direction={["column", "column", "row"]}
        justify="center"
        align="center"
      >
        <ImageContent />
        <Content />
      </Flex>
    </Box>
  );
}

// ImageSection component
function Content() {
  return (
    <Box
      h={[800, 500, 600]}
      pt={["16px", "32px", "54px"]}
      px={["4px", "16px", "40px"]}
      w={["100%", "100%", "800px"]}
    >
      <Box textAlign={["center", "center", "left"]}>
        <Heading
          fontWeight={["light", "medium", "light"]}
          fontSize={["3xl", "3xl", "54px"]}
          pb={10}
          // color="gray.600"
        >
          Why Choose<br></br> Hepzibah Care
        </Heading>
        <Text
          fontWeight={400}
          fontSize={["sm", "md", "md"]}
          w={["100%", "100%", 600]}
          color={["gray.700"]}
          textAlign={["center", "center", "left"]}
        >
          At Hepzibah Care, we provide personalized, compassionate support that
          meets the unique needs of every individual. Our focus is on empowering
          clients and their families to live independently while offering the
          care, guidance, and resources they need to succeed. We pride ourselves
          on
        </Text>
        <Box mt="48px"></Box>
        <Flex
          pb={["0px", "10px", "10px"]}
          direction={["column", "column", "row"]}
        >
          <Box
            bgColor="specialColor.400"
            width={["100%", "100%", "305px"]}
            height="223px"
            marginRight={["0px", "0px", "10px"]}
            borderRadius={10}
            p={4}
            pb={["10px", "0px", "0px"]}
            mb={["10px", "0px", "0px"]}
            boxShadow="xl"
          >
            <Text fontSize="18px" fontWeight="semiBold" py="12px">
              Holistic and Personalized Care
            </Text>
            <Text fontSize="14px" color={["gray.700"]}>
              We understand that each client’s journey is unique, and our
              approach is tailored to meet the specific needs of every
              individual.
            </Text>
          </Box>
          <Box
            bgColor="#ffffff"
            width={["100%", "100%", "305px"]}
            height="223px"
            borderRadius={10}
            p={4}
            mb={["10px", "0px", "0px"]}
            boxShadow="xl"
          >
            <Text fontSize="18px" fontWeight="semiBold" py="12px">
              Experienced and Compassionate Team
            </Text>
            <Text fontSize="14px" color={["gray.700"]}>
              Our team includes experienced Social Workers, Care Coordinators,
              and Support Workers, all of whom are dedicated to making a
              difference in the lives of our clients.
            </Text>
          </Box>
        </Flex>
        <Flex direction={["column", "column", "row"]}>
          <Box
            bgColor="#ffffff"
            width={["100%", "100%", "305px"]}
            height="223px"
            marginRight={["0px", "0px", "10px"]}
            mb={["10px", "0px", "0px"]}
            borderRadius={10}
            p={4}
            boxShadow="2xl"
          >
            <Text fontSize="18px" fontWeight="semiBold" py="12px">
              Client-Centered Focus
            </Text>
            <Text fontSize="14px" color={["gray.700"]}>
              We place the client at the heart of everything we do, ensuring
              their voice is central to every decision, and their goals are at
              the forefront of our services.
            </Text>
          </Box>
          <Box
            bgColor="specialColor.400"
            width={["100%", "100%", "305px"]}
            height="223px"
            borderRadius={10}
            p={4}
            boxShadow="2xl"
          >
            <Text fontSize="18px" fontWeight="semiBold" py="12px">
              Community Connection
            </Text>
            <Text fontSize="14px" color={["gray.700"]}>
              We work closely with local organizations and community groups to
              ensure our clients are connected to broader support systems,
              enriching their experience and promoting social inclusion.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function ImageContent() {
  return (
    <Box
      pt={["32px", "32px", "30px"]}
      h={[300, 400, 600]}
      px={["16px", "16px"]}
      w={["100%", "100%", 800]}
      display={["none", "none", "block"]}
      // bgColor="brandblue.800"
      // bg="brandblue.200"

      // borderRadius={20}
      backgroundImage={`url(${disableimg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // className="ekit-fancy-text-animated">
    ></Box>
  );
}

export default Main;
