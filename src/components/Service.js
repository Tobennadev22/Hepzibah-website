import {
  Box,
  Text,
  Flex,
  Heading,
  Divider,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import myImage from "../assets/holdinghands.png";
import transportSection from "../assets/Transportservice.png";

import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const NavLink = ({ children, to = "#", onClick }) => (
  <ChakraLink as={ReactRouterLink} to={to} onClick={onClick}>
    {children}
  </ChakraLink>
);

// Array of services
const ServiceDescription = [
  {
    title: "Personal and In-home Care",
    description:
      "Providing assistance with daily living activities, and helping individuals maintain their independence at home.",
  },
  // {
  //   title: "Accommodation Services (SIL, ILO, & SDA Accommodations)",
  //   description:
  //     "Offering safe and supportive living arrangements for those needing various levels of care.",
  // },
  {
    title: "Community Access",
    description:
      "Facilitating participation in social, recreational, and community activities to foster inclusion and a sense of belonging.",
  },
  {
    title: "Behaviour Support",
    description:
      "Develop personalized behaviour support plans to manage challenging behaviours and enhance overall well-being.",
  },
  {
    title: "Case Management",
    description:
      "Our case managers coordinate the services needed to enable each individual to achieve their goals by ensuring they access the right support promptly.",
  },
  {
    title: "Care Coordination and Advocacy",
    description:
      "Navigating support systems can be challenging, so we provide care coordination services to streamline access to all necessary services. Additionally, we advocate for our clients, ensuring their rights and needs are prioritised across all care systems.",
  },
];

const referralServices = [
  {
    title: "Healthcare Providers",
    description:
      "Including general practitioners, specialists, and allied health professionals.",
    bgColor: "specialColor.400",
  },
  {
    title: "Mental Health Professionals",
    description:
      "Access to counselling, psychologist, and psychiatric services tailored to individual mental health needs.",
    bgColor: "#ffffff",
  },
  {
    title: "Community and Social Services",
    description:
      "Referrals to local community groups, support networks, recreational programs, and social activities that foster connection and inclusion.",
    bgColor: "specialColor.400",
  },
  {
    title: "Housing and Accommodation Services",
    description:
      "Assistance with finding suitable accommodation options, including supported living and independent housing solutions.",
    bgColor: "#ffffff",
  },
  {
    title: "Financial and Legal Aid",
    description:
      "Connect clients with financial counsellors, legal aid, and advocacy services to ensure their rights and welfare are safeguarded.",
    bgColor: "specialColor.400",
  },
];

const transportServices = [
  {
    title: "Medical Appointments",
    description:
      "We arrange transport to and from healthcare appointments, ensuring clients can access necessary medical care, whether it’s for routine check-ups, specialist consultations, or ongoing treatments.",
    bgColor: "#F1F6F8",
  },
  {
    title: "Community and Social Engagement",
    description:
      "We believe in the importance of staying active and involved in the community. Our transport service ensures that clients can attend social events, recreational activities, educational programs, and community gatherings, fostering social inclusion and well-being.",
  },
  {
    title: "Personal Errands",
    description:
      "We offer support with transportation for everyday errands such as grocery shopping, visiting family or friends, and attending personal appointments, helping clients maintain their independence and quality of life.",
    // bgColor: "#F1F6F8",
  },
  {
    title: "Rehabilitation and Therapy Sessions",
    description:
      "Regular attendance at rehabilitation and therapy sessions is key to recovery and improvement. Our transport services help clients reach these appointments without the stress of managing their own travel.",
    bgColor: "#F1F6F8",
  },
  {
    title: "Special Events and Activities",
    description:
      "For clients who wish to participate in cultural, religious, or special events, we ensure they have the transportation they need to stay connected to their passions and culture.",
    bgColor: "#F1F6F8",
  },
  {
    title: "",
    description: "",
    // bgColor: "#F1F6F8",
  },
];

function Service() {
  return (
    <Box>
      <HeaderContent />
      <ServiceContent handleServiceContent={ServiceDescription} />
      <ReferralContent />
      <TransportService />
    </Box>
  );
}

function HeaderContent() {
  return (
    <Box
      mb={["16px", "16px", "28px"]}
      as="section"
      px={[2, 5, 10]}
      pt="48px"
      pb={["10px", "40px", "140px"]}
      bg="#F5FCFF"
    >
      <Flex
        direction={["column", "column", "row"]}
        spacing="20px"
        px={[2, 5, 10]}
      >
        <Box
          h={[280, 500, 600]}
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
            mt={["0px", "0px", "80px"]}
          >
            <Heading
              fontWeight={["light", "medium", "light"]}
              fontSize={["2xl", "3xl", "54px"]}
              pb={[2, 5, 10]}
              width={["100%"]}
              // color="gray.600"
            >
              Our Support Service
            </Heading>
            <Text
              fontWeight={300}
              fontSize={["sm", "md", "md"]}
              w={["100%", "100%", 600]}
              // pt="2"
              color="gray.600"
              textAlign={["center", "center", "left"]}
            >
              Hepzibah Care offers a comprehensive range of support services
              tailored to meet the unique needs of individuals within the
              disability sector. Our disability support services are designed to
              enhance independence and inclusion for individuals living with
              disabilities. Services include:
            </Text>
            <Box mt={["10px", "32", "48px"]}>
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
    </Box>
  );
}

// ImageSection component
function ImageSection() {
  return (
    <Box
      h={[300, 400, 600]}
      pt={["32px", "48px", "54px"]}
      px={["16px", "16px"]}
      // mb={["24px", "0px", "0px"]}
      my={["32px", "0px", "0px"]}
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

// Updated ServiceContent component
function ServiceContent({ handleServiceContent }) {
  return (
    <Box px={["40px", "48px", "120px"]} pt={["14px", "18px", "80px"]} pb="80px">
      <Flex wrap="wrap" spacing="32px" align="center">
        {handleServiceContent.map((service, index) => (
          <Box
            key={index}
            width={["100%", "100%", "347px"]}
            marginRight={index % 3 === 2 ? 0 : ["0px", "0px", "80px"]}
            mb={["32px", "32px", "48px"]}
          >
            <Heading fontSize="18px" fontWeight="semiBold" pb="14px">
              {service.title}
            </Heading>
            <Text color="gray.500">{service.description}</Text>
            <Divider py={2} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

function ReferralContent() {
  return (
    <Box
      w={["100%"]}
      bgColor="#FBFBFB"
      p={[2, 8, 16]}
      borderRadius="20px"
      pb={["32px", "48px", "64px"]}
    >
      <Box w={["100%", "100%", 800]} textAlign="center" mx="auto">
        <Heading
          pb={["18px"]}
          fontWeight={["light", "medium", "light"]}
          fontSize={["2xl", "3xl", "48px"]}
        >
          Referral Services
        </Heading>
        <Text fontSize={["sm", "md", "md"]} mb={["32px", "32px", "0px"]}>
          We connect clients with a wide network of trusted services and
          professionals that can further enhance their quality of life. Whether
          you need specialized healthcare, mental health support, or community
          resources, our referral services are here to help. We assess each
          individual’s unique needs and link them with additional services such
          as:
        </Text>
      </Box>
      <Box pt="64px" px={["24px", "32px", "100px"]}>
        <Flex wrap="wrap" justify="center">
          {referralServices.map((service, index) => (
            <Box
              key={index}
              bgColor={service.bgColor}
              width={["100%", "100%", "350px"]}
              height={["100%", "100px", "165px"]}
              borderRadius={10}
              p={4}
              mb="10px"
              mx={["0px", "0px", "10px"]}
            >
              <Text fontSize="18px" fontWeight="semiBold" py="12px">
                {service.title}
              </Text>
              <Text fontSize="14px">{service.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

function TransportService() {
  return (
    <Box
      // mb={["16px", "16px", "28px"]}
      as="section"
      px={[2, 5, "140px"]}
      pt={["40px", "80px", "80px"]}
      pb={["32px", "50px", "240px"]}
      w={["100%"]}
      h={["100%", "100%", 1000]}
    >
      <Flex direction={["column", "column", "row"]}>
        <Box
          h={[300, 400, 600]}
          pt={["32px", "32px", "54px"]}
          px={["16px", "16px"]}
          w={["100%", "100%", 800]}
          display={["none", "none", "block"]}
          backgroundImage={`url(${transportSection})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          marginRight={20}
        ></Box>
        <Box>
          <Box w={["100%", "100%", 800]} mb="50px">
            <Heading
              pb="18px"
              fontWeight={["light", "medium", "light"]}
              fontSize={["2xl", "3xl", "48px"]}
              textAlign={["center", "center", "left"]}
            >
              Transport Services
            </Heading>
            <Text fontSize={["sm", "md", "md"]}>
              Reliable and accessible transport is a critical part of
              maintaining independence and ensuring clients stay connected to
              essential services and their community. Our transport services
              provide safe and dependable transportation options for a variety
              of needs, including as:
            </Text>
          </Box>
          <Box>
            <Flex wrap="wrap" justify="center">
              {transportServices.map((service, index) => (
                <Box
                  key={index}
                  bgColor={service.bgColor || "#ffffff"}
                  width={["100%", "100%", "350px"]}
                  height="189px"
                  borderRadius={10}
                  p={4}
                  mb="10px"
                  mx={["0px", "0px", "10px"]}
                >
                  <Text fontSize="18px" fontWeight="semiBold" pb="5px">
                    {service.title}
                  </Text>
                  <Text fontSize="14px" color="gray.700" fontWeight={400}>
                    {service.description}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

// function TransportService() {
//   return (
//     <Box
//       mb={["16px", "16px", "28px"]}
//       as="section"
//       px={[2, 5, "140px"]}
//       pt={["40px", "80px", "80px"]}
//       pb={["240px"]}
//       w={["100%"]}
//       h={["100%", "100%", 1000]}
//     >
//       <Flex direction={["column", "column", "row"]}>
//         <Box
//           h={[300, 400, 600]}
//           pt={["32px", "32px", "54px"]}
//           px={["16px", "16px"]}
//           w={["100%", "100%", 800]}
//           display={["block", "none", "block"]}
//           // bg="brandblue.200"

//           // borderRadius={20}
//           backgroundImage={`url(${transportSection})`}
//           backgroundSize="cover"
//           backgroundPosition="center"
//           backgroundRepeat="no-repeat"
//           marginRight={20}
//         ></Box>
//         <Box>
//           <Box w={["100%", "100%", 800]} mb="50px">
//             <Heading fontSize={["24px"]} pb="18px">
//               Transport Services
//             </Heading>
//             <Text fontSize={["16px"]}>
//               Reliable and accessible transport is a critical part of
//               maintaining independence and ensuring clients stay connected to
//               essential services and their community. Our transport services
//               provide safe and dependable transportation options for a variety
//               of needs, including as:
//             </Text>
//           </Box>
//           <Box>
//             <Flex direction={["column", "column", "row"]} mb="32px">
//               <Box
//                 bgColor="#F1F6F8"
//                 width={["100%", "100%", "350px"]}
//                 height="189px"
//                 marginRight={["0px", "0px", "12px"]}
//                 // mb={["10px", "0px", "0px"]}
//                 borderRadius={10}
//                 p={4}
//                 py={["20px"]}
//                 // boxShadow="2xl"
//               >
//                 <Text fontSize="18px" fontWeight="Bold" pb="5px">
//                   Medical Appointments
//                 </Text>
//                 <Text fontSize="14px" color="gray.700" fontWeight={400}>
//                   We arrange transport to and from healthcare appointments,
//                   ensuring clients can access necessary medical care, whether
//                   it’s for routine check-ups, specialist consultations, or
//                   ongoing treatments.
//                 </Text>
//               </Box>
//               <Box
//                 // bgColor="#ffffff"
//                 width={["100%", "100%", "350px"]}
//                 height="189px"
//                 borderRadius={10}
//                 p={4}
//                 py={["20px"]}
//                 // boxShadow="2xl"
//               >
//                 <Text fontSize="18px" fontWeight="Bold" pb="5px">
//                   Community and Social Engagement
//                 </Text>
//                 <Text fontSize="14px" color="gray.700" fontWeight={400}>
//                   We believe in the importance of staying active and involved in
//                   the community. Our transport service ensures that clients can
//                   attend social events, recreational activities, educational
//                   programs, and community gatherings, fostering social inclusion
//                   and well-being.
//                 </Text>
//               </Box>
//             </Flex>

//             <Flex direction={["column", "column", "row"]} mb="32px">
//               <Box
//                 // bgColor="#F1F6F8"
//                 width={["100%", "100%", "350px"]}
//                 height="189px"
//                 marginRight={["0px", "0px", "10px"]}
//                 mb={["10px", "0px", "0px"]}
//                 borderRadius={10}
//                 p={4}
//                 // boxShadow="2xl"
//               >
//                 <Text fontSize="18px" fontWeight="Bold" pb="5px">
//                   Personal Errands
//                 </Text>
//                 <Text fontSize="14px" color="gray.700" fontWeight={400}>
//                   We offer support with transportation for everyday errands such
//                   as grocery shopping, visiting family or friends, and attending
//                   personal appointments, helping clients maintain their
//                   independence and quality of life.
//                 </Text>
//               </Box>
//               <Box
//                 bgColor="#F1F6F8"
//                 width={["100%", "100%", "350px"]}
//                 height="189px"
//                 borderRadius={10}
//                 p={4}
//                 // boxShadow="2xl"
//               >
//                 <Text fontSize="18px" fontWeight="Bold" pb="5px">
//                   Rehabilitation and Therapy Sessions
//                 </Text>
//                 <Text fontSize="14px" color="gray.700" fontWeight={400}>
//                   Regular attendance at rehabilitation and therapy sessions is
//                   key to recovery and improvement. Our transport services help
//                   clients reach these appointments without the stress of
//                   managing their own travel.
//                 </Text>
//               </Box>
//             </Flex>

//             <Flex direction={["column", "column", "row"]}>
//               <Box
//                 bgColor="#F1F6F8"
//                 width={["100%", "100%", "350px"]}
//                 height="189px"
//                 marginRight={["0px", "0px", "10px"]}
//                 mb={["10px", "0px", "0px"]}
//                 borderRadius={10}
//                 p={4}
//                 // boxShadow="2xl"
//               >
//                 <Text fontSize="18px" fontWeight="Bold" pb="5px">
//                   Special Events and Activities
//                 </Text>
//                 <Text fontSize="14px" color="gray.700" fontWeight={400}>
//                   For clients who wish to participate in cultural, religious, or
//                   special events, we ensure they have the transportation they
//                   need to stay connected to their passions and culture.
//                 </Text>
//               </Box>
//               <Box
//                 // bgColor="#F1F6F8"
//                 width={["100%", "100%", "350px"]}
//                 height="189px"
//                 borderRadius={10}
//                 p={4}
//                 // boxShadow="2xl"
//               ></Box>
//             </Flex>
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// }

export default Service;
