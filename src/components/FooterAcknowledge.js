import { Box, Text, Stack, Heading, Container } from "@chakra-ui/react";
import AustralianFlag from "../icons/Flag_of_Australia.svg.png";

function Footer_Acknowledge() {
  return (
    <Container maxW={["container: xl"]} bgColor="lemonColor.50">
      <Box w={["100%", "100%", "800px"]} mx="auto" py="40px">
        {/* <Flex
              direction={["column", "column", "row"]}
              // spacing="20px"
              gap="120px"
              alignItems="center"
              justifyContent="center"
            ></Flex> */}

        <Box textAlign="center">
          <Box
            py={8}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src={AustralianFlag} alt="AustralianFlag" width="150px" />
          </Box>
          <Stack>
            <Heading>Acknowledgement of Country</Heading>
            <Text>
              We acknowledge the Traditional Custodians of the land on which our
              care services operate and the First Nations peoples whose
              connection to Country is enduring, sacred, and unbroken. We pay
              our respects to Elders past and present, who carry the stories,
              languages, and wisdom of thousands of generations.
            </Text>
            <Text>
              This land was never ceded. It always was, and always will be,
              Aboriginal land.
            </Text>
            <Text>
              We honour the strength and resilience of Aboriginal and Torres
              Strait Islander communities, especially those who have faced
              dispossession, displacement, and injustice. We recognise that
              reconciliation is an ongoing journey. One that calls for truth,
              healing, and justice.
            </Text>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer_Acknowledge;
