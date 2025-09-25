// import { useState } from "react";
// import {
//   Box,
//   Stack,
//   Input,
//   Button,
//   Textarea,
//   FormControl,
//   useColorModeValue,
// } from "@chakra-ui/react";

// function ContactInput() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const res = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setStatus("✅ Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("❌ " + (data.error || "Failed to send"));
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("❌ Something went wrong");
//     }
//   };

//   return (
//     <Stack direction="column">
//       <Box as="form" onSubmit={handleSubmit}>
//         <FormControl mb={4}>
//           <Input
//             placeholder="Full Name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             w={["100%", "300px", "400px"]}
//           />
//         </FormControl>
//         <FormControl mb={4}>
//           <Input
//             placeholder="Email"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             w={["100%", "300px", "400px"]}
//           />
//         </FormControl>
//         <FormControl mb={4}>
//           <Textarea
//             placeholder="Message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             w={["100%", "300px", "400px"]}
//             h="136px"
//           />
//         </FormControl>
//         <Box mt="24px">
//           <Button
//             type="submit"
//             _hover={{
//               bg: useColorModeValue("lemonColor.800", "#ffffff"),
//               color: "gray.50",
//             }}
//             bgColor="lemonColor.600"
//             color="#ffffff"
//             w="158px"
//             h="48px"
//           >
//             Submit
//           </Button>
//         </Box>
//         <Box mt={4} color="gray.600">
//           {status}
//         </Box>
//       </Box>
//     </Stack>
//   );
// }

// export default ContactInput;

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
  FormControl,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ContactImage from "../assets/Frame 31.png";
import "aos/dist/aos.css";
import AOS from "aos";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200,
      easing: "ease-in-out",
      once: false, // Animation occurs only once
    });
  }, []);

  return (
    <Box
      mb={["16px", "16px", "28px"]}
      as="section"
      px={[2, 5, "100px"]}
      pt={["80px", "32px", "48px"]}
      pb={["20px", "40px", "140px"]}
      data-aos="fade-up" // AOS animation
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
            We would love to <br></br> hear from you.
          </Heading>
          <Text
            fontWeight={400}
            fontSize={["sm", "md", "md"]}
            pt="2"
            color={["gray.700"]}
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ " + (data.error || "Failed to send"));
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong");
    }
  };
  return (
    <Stack direction={["column"]}>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <Input
            placeholder="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            w={["100%", "300px", "400px"]}
          />
        </FormControl>
        <FormControl mb={4}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            w={["100%", "300px", "400px"]}
          />
        </FormControl>
        <FormControl mb={4}>
          <Textarea
            placeholder="Message"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            w={["100%", "300px", "400px"]}
            h={["136px"]}
          />
        </FormControl>
        <Box mt="24px">
          <Link>
            <Button
              type="submit"
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
        <Box mt={4} color="gray.600">
          {status}
        </Box>
      </Box>
    </Stack>
  );
}

export default Contact;
