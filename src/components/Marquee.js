import { Box, Text, Flex } from "@chakra-ui/react";

export default function Marquee() {
  return (
    <Box
      overflow="hidden"
      whiteSpace="nowrap"
      width="100%"
      bg="gray.800"
      color="white"
      p={2}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        gap={8}
        py={2}
        //   bgColor="#000"
        //   color="#fff"
        borderBottom="1px solid #ccc"
      >
        <Box>
          <Text
            as="span"
            display="inline-block"
            animation="marquee 10s linear infinite"
          >
            📞 Tel: +44 55667 8890 | ✉️ Email address : info@hepzibahcare.org
          </Text>
        </Box>
        {/* <Box>
          <Text
            as="span"
            display="inline-block"
            animation="marquee 5s linear infinite"
          >
            
          </Text>
        </Box> */}
      </Flex>
      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Box>
  );
}
