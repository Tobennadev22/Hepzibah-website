import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Stack,
  Button,
  Link,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import ContactImage from "../assets/Frame 31.png";

function Contact() {
  return (
    <Box
      mb={["16px", "16px", "28px"]}
      as="section"
      px={[2, 5, "100px"]}
      pt={["80px", "32px", "48px"]}
      pb={["20px", "40px", "140px"]}
    >
      <Flex>
        <Box
          textAlign={["center", "center", "left"]}
          w={["100%", "100%", "800px"]}
        >
          <Text fontSize={"18px"}>Get In Touch</Text>
          <Heading
            fontWeight={["light", "medium", "light"]}
            fontSize={["3xl", "3xl", "54px"]}
            pb={10}
            // textAlign={["center", "center", "left"]}
          >
            We do love to hear<br></br> form you.
          </Heading>
          <Text
            fontWeight="medium"
            fontSize={["sm", "md", "md"]}
            pt="2"
            color={["gray.500"]}
            // textAlign={["center", "center", "left"]}
          >
            If you or a loved one are seeking Disability, or Mental Health Care
            support services, Hepzibah Care is here to help. Contact us today to
            learn more about how we can support you to live a fulfilling and
            independent life.
          </Text>
          <Box pt={["20px"]}>
            <ContactInput />
          </Box>
        </Box>
        <Box
          pt={["32px", "32px", "30px"]}
          h={[300, 400, "100%"]}
          px={["16px", "16px"]}
          w={["100%", "100%", 800]}
          display={["none", "none", "block"]}
        >
          <img src={ContactImage} alt="contact-image"></img>
        </Box>
      </Flex>
    </Box>
  );
}

function ContactInput() {
  return (
    <Stack direction={["column"]}>
      <Input
        placeholder="Full Name"
        type="text"
        w={["300px", "300px", "400px"]}
      />
      <Input placeholder="Email" type="email" w={["300px", "300px", "400px"]} />
      <Textarea
        placeholder="Message"
        type="text"
        w={["300px", "300px", "400px"]}
        h={["136px"]}
      />
      <Box mt="24px">
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
            Submit
          </Button>
        </Link>
      </Box>
    </Stack>
  );
}

export default Contact;
