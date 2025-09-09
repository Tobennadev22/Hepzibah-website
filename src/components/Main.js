import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import disableimg from "../assets/img-section.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Communinity from "../icons/community.png";
import Holistic from "../icons/holistic.png";
import Experience from "../icons/experience.png";
import Client from "../icons/client.png";
import BrushStroke from "../assets/stroke.png";

const MotionBox = motion(Box);
function Main() {
  const { scrollYProgress } = useScroll();

  // Animate scale of brush stroke as user scrolls
  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200, // Trigger animation when 200px in viewport
      easing: "ease-in-out",
      once: false, // Animation occurs only once
    });
  }, []);
  return (
    <Box
      // mb={["16px", "16px", "28px"]}
      as="section"
      px={[2, 5, "100px"]}
      pt={["40px", "80px", "80px"]}
      pb={["240px"]}
      w={["100%"]}
      h={["1400px", 600, "1300px"]}
      bg="#F5FCFF"
      data-aos="fade-up" // AOS animation
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
function Content({ scaleX }) {
  return (
    <Box
      h={["100%", 500, "100%"]}
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
          Our Commitment<br></br> to Care
        </Heading>
        {/* <MotionBox
          position="absolute"
          bottom={-2}
          left="0"
          right="0"
          h="20px"
          bgImage={`url(${BrushStroke})`} // replace with your brush stroke asset
          bgRepeat="no-repeat"
          bgSize="cover"
          originX={0}
          style={{ scaleX }}
        /> */}
        <Stack
          fontWeight={400}
          fontSize={["sm", "md", "md"]}
          w={["100%", "100%", 600]}
          color={["gray.700"]}
          textAlign={["center", "center", "left"]}
        >
          <Text>
            {" "}
            At Hepzibah Care, we believe that every person deserves to feel
            safe, respected, and supported. Whether you're seeking aged care,
            disability support, or community services, our team is here to walk
            alongside you with empathy and expertise.
          </Text>
          <Text>
            {" "}
            We take the time to listen and understand your goals. Our care is
            not just about services; it's about relationships built on trust,
            dignity, and genuine connection
          </Text>
          <Text>
            {" "}
            We are proud to serve diverse communities and are committed to
            culturally safe, inclusive care for all. Our staff are trained to
            honour each individual's background, identity, and preferences,
            ensuring that your experience with us feels personal and empowering.
          </Text>
          <Text>
            {" "}
            Let us support you in living life your way with confidence, comfort,
            and compassion.
          </Text>
        </Stack>
        <Box mt="48px"></Box>
        <Flex
          pb={["0px", "10px", "10px"]}
          direction={["column", "column", "row"]}
        >
          <Box
            bgColor="specialColor.400"
            width={["100%", "100%", "305px"]}
            height="240px"
            marginRight={["0px", "0px", "10px"]}
            borderRadius={10}
            p={4}
            pb={["10px", "0px", "0px"]}
            mb={["10px", "0px", "0px"]}
            boxShadow="xl"
          >
            <img src={Holistic} alt="HolisticIcon" width="32px" />
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
            height="240px"
            borderRadius={10}
            p={4}
            mb={["10px", "0px", "0px"]}
            boxShadow="xl"
            _hover={{
              transform: " scale(1.05)",
              transition: "transform 0.6s ease",
            }}
          >
            <img src={Experience} alt="ExperienceIcon" width="32px" />
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
            height="240px"
            marginRight={["0px", "0px", "10px"]}
            mb={["10px", "0px", "0px"]}
            borderRadius={10}
            p={4}
            boxShadow="2xl"
          >
            <img src={Client} alt="ClientIcon" width="32px" />
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
            height="240px"
            borderRadius={10}
            p={4}
            boxShadow="2xl"
          >
            <img src={Communinity} alt="CommunitycareIcon" width="32px" />
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

// import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect } from "react";
// import AOS from "aos";

// import disableimg from "../assets/img-section.png";
// import Holistic from "../icons/holistic.png";
// import Experience from "../icons/experience.png";
// import Client from "../icons/client.png";
// import Community from "../icons/community.png";

// import "aos/dist/aos.css";

// const MotionBox = motion(Box);

// function Main() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       offset: 200,
//       easing: "ease-in-out",
//       once: false,
//     });
//   }, []);

//   return (
//     <Box
//       as="section"
//       px={[2, 5, "100px"]}
//       pt={["40px", "80px"]}
//       pb="240px"
//       w="100%"
//       h={["1400px", 600, "1300px"]}
//       bg="#F5FCFF"
//       data-aos="fade-up"
//     >
//       <Flex
//         direction={["column", "column", "row"]}
//         justify="center"
//         align="center"
//       >
//         <ImageContent />
//         <Content scaleX={scaleX} />
//       </Flex>
//     </Box>
//   );
// }

// /* ---------------- Content Section ---------------- */
// function Content({ scaleX }) {
//   return (
//     <Box h="100%" pt={[4, 8, 14]} px={[2, 4, 10]} w={["100%", "100%", "800px"]}>
//       <Box textAlign={["center", "center", "left"]} position="relative">
//         {/* Heading with Brush Stroke */}
//         <Heading
//           fontWeight={["light", "medium", "light"]}
//           fontSize={["3xl", "3xl", "54px"]}
//           pb={10}
//         >
//           Our Commitment <br /> to Care
//         </Heading>
//         <MotionBox
//           position="absolute"
//           bottom={2}
//           left="0"
//           right="0"
//           h="20px"
//           bgImage="url('../assets/stroke.png')"
//           bgRepeat="no-repeat"
//           bgSize="cover"
//           originX={0}
//           style={{ scaleX }}
//         />

//         {/* Intro Text */}
//         <Stack
//           fontWeight={400}
//           fontSize={["sm", "md"]}
//           w={["100%", "100%", 600]}
//           color="gray.700"
//           textAlign={["center", "center", "left"]}
//           spacing={4}
//         >
//           <Text>
//             At Hepzibah Care, we believe that every person deserves to feel
//             safe, respected, and supported. Whether you're seeking aged care,
//             disability support, or community services, our team is here to walk
//             alongside you with empathy and expertise.
//           </Text>
//           <Text>
//             We take the time to listen and understand your goals. Our care is
//             not just about services; it's about relationships built on trust,
//             dignity, and genuine connection.
//           </Text>
//           <Text>
//             We are proud to serve diverse communities and are committed to
//             culturally safe, inclusive care for all. Our staff are trained to
//             honour each individual's background, identity, and preferences,
//             ensuring that your experience with us feels personal and empowering.
//           </Text>
//           <Text>
//             Let us support you in living life your way with confidence, comfort,
//             and compassion.
//           </Text>
//         </Stack>

//         {/* Service Cards */}
//         <Box mt="48px">
//           <Flex wrap="wrap" gap={4} justify={["center", "flex-start"]}>
//             <InfoCard
//               icon={Holistic}
//               title="Holistic and Personalized Care"
//               description="We understand that each client’s journey is unique, and our approach is tailored to meet the specific needs of every individual."
//               bg="specialColor.400"
//             />
//             <InfoCard
//               icon={Experience}
//               title="Experienced and Compassionate Team"
//               description="Our team includes experienced Social Workers, Care Coordinators, and Support Workers, all dedicated to making a difference in the lives of our clients."
//             />
//             <InfoCard
//               icon={Client}
//               title="Client-Centered Focus"
//               description="We place the client at the heart of everything we do, ensuring their voice is central to every decision and their goals are prioritized."
//             />
//             <InfoCard
//               icon={Community}
//               title="Community Connection"
//               description="We work closely with local organizations and groups to connect clients to broader support systems, enriching their experience and promoting social inclusion."
//               bg="specialColor.400"
//             />
//           </Flex>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// /* ---------------- Reusable Info Card ---------------- */
// function InfoCard({ icon, title, description, bg = "#fff" }) {
//   return (
//     <Box
//       bgColor={bg}
//       w={["100%", "100%", "305px"]}
//       h="240px"
//       borderRadius={10}
//       p={4}
//       boxShadow="xl"
//       display="flex"
//       flexDir="column"
//       justifyContent="flex-start"
//     >
//       <img src={icon} alt={`${title} Icon`} width="32px" />
//       <Text fontSize="18px" fontWeight="semibold" py="12px">
//         {title}
//       </Text>
//       <Text fontSize="14px" color="gray.700">
//         {description}
//       </Text>
//     </Box>
//   );
// }

// /* ---------------- Image Section ---------------- */
// function ImageContent() {
//   return (
//     <Box
//       pt={8}
//       h={[300, 400, 600]}
//       w={["100%", "100%", 800]}
//       display={["none", "none", "block"]}
//       backgroundImage={`url(${disableimg})`}
//       backgroundSize="cover"
//       backgroundPosition="center"
//       backgroundRepeat="no-repeat"
//     />
//   );
// }

// export default Main;
