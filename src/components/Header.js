import {
  Box,
  Text,
  Heading,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
// import myImage from "../assets/bg-toby.png";
// import { Wave } from "../icons/hands.png";
import faces from "../assets/faces.png";
import myImage from "../assets/thought.png";
import { Link } from "react-router-dom";

// Main Header component
function Header() {
  return (
    <Box
      mb={["16px", "16px", "28px"]}
      as="section"
      px={[2, 5, 10]}
      pt="48px"
      pb={["10px", "40px", "140px"]}
    >
      <Flex direction={["column", "column", "row"]} spacing="20px">
        {/* Main content box with background image */}
        <Box
          h={[700, 500, 600]}
          pt={["16px", "32px", "54px"]}
          px={["4px", "16px", "40px"]}
          w={["100%", "100%", 1140]}
          borderRadius={20}
          // backgroundImage={`url(${myImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          mx="auto"
          marginRight={["0px", "0px", "20px"]}
        >
          <Box
            textAlign={["center", "center", "left"]}
            px={["0px", "16px", "24px"]}
          >
            <Heading
              fontWeight={["light", "medium", "light"]}
              fontSize={["2xl", "3xl", "54px"]}
              pb={[5, 5, 10]}
              width={["100%"]}
              // color="gray.600"
            >
              <span className="singleHeadingTextColor">Empowering</span>{" "}
              Individuals
              <br></br> with Disabilities to <br></br> Achieve Independence,
              <br></br> Dignity, and a Fulfilling<br></br>
              Life
            </Heading>
            <Text
              fontWeight="medium"
              fontSize={["sm", "md", "md"]}
              w={["100%", "100%", 600]}
              pt="2"
              color={["gray.500"]}
              textAlign={["center", "center", "left"]}
            >
              We delight in offering Person-Centered services to individuals
              with disabilities and their caregivers through a Biopsychosocial
              approach, enabling our service users to flourish as they develop
              living skills and rediscover their sense of purpose and connection
              in society
            </Text>
            <Box mt="48px">
              <Link>
                <Button
                  href={"#"}
                  _hover={{
                    bg: useColorModeValue("lemonColor.800", "#ffffff"),
                    color: "gray.50",
                  }}
                  bgColor="lemonColor.600"
                  color="#ffffff"
                  w={["158px"]}
                  h={["48px"]}
                >
                  Get In Touch
                </Button>
              </Link>
            </Box>
          </Box>
          <Box pt="64px">
            <Flex
              direction={["column", "column", "row"]}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src={faces}
                alt="faces"
                width={["170px"]}
                marginLeft="14px"
              ></img>
              <p>We’ve assisted over 1000 persons in 2years</p>
            </Flex>
          </Box>
        </Box>
        {/* Placeholder for additional content */}
        <ImageSection />
      </Flex>
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
    >
      {/* Additional content can be added here */}
    </Box>
  );
}

export default Header;
