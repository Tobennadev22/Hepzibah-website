import { Box, Text } from "@chakra-ui/react";

import { keyframes } from "@emotion/react";

import Appicon from "../assets/Hepzibah Care LH_Logo_icon.png";

// Define spin animation
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Circular = () => {
  const letters = "Your Care, Our Delight • ".split("");

  return (
    <Box
      position="relative"
      left="1000px"
      top="-180px"
      w="300px"
      h="300px"
      display={["none", "flex", "flex"]}
      alignItems="center"
      justifyContent="center"
    >
      {/* Circular spinning wrapper */}
      <Box
        position="absolute"
        w="100%"
        h="100%"
        borderRadius="50%"
        animation={`${spin} 10s linear infinite`}
      >
        {letters.map((letter, i) => {
          const angle = (i / letters.length) * 2 * Math.PI;
          const radius = 120; // distance from center
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <Text
              key={i}
              position="absolute"
              left={`calc(50% + ${x}px)`}
              top={`calc(50% + ${y}px)`}
              transform="translate(-50%, -50%)"
              fontSize="16px"
              fontWeight="bold"
            >
              {letter}
            </Text>
          );
        })}
      </Box>

      {/* Center content */}
      <Text fontSize="2xl" fontWeight="bold">
        <img src={Appicon} alt="logoicon" />
      </Text>
    </Box>
  );
};

export default Circular;
