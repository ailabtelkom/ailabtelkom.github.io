import React from "react";
import { Box, Heading, Divider, useColorModeValue, Button, useColorMode, Image, Skeleton } from "@chakra-ui/core";
// import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ButtonZoom from "../components/ButtonZoom";
import ButtonAiTalks from "../components/ButtonAiTalks";

const AiTalks = () => {
  const MotionBox = motion.custom(Box);
  const MotionImage = motion.custom(Image);
  const containerVariant = {
    start: {
      y: 20,
      opacity: 0,
      transition: { staggerChildren: 0.25 },
    },
    end: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };
  return (
    <MotionBox
      initial="start"
      animate="end"
      variants={containerVariant}
      maxW={[null, null, "2xl", "5xl"]}
      m="auto"
      py="50px"
      textAlign="center"
      position="relative"
    >
      <Heading fontSize={{ default: "2xl", lg: "3xl" }}>
        AI TALKS  - Episode 1
      </Heading>
      
      <Divider mt="2" mb="4" />
      {/* <ButtonZoom/> */}
      <ButtonAiTalks/>
      {/* <Heading as="h2" fontSize={{ default: "lg", lg: "xl" }} mb="4" mt="2">
        What Is Artificial Intelligence laboratory???
      </Heading> */}
      {/* <Box width="100%" h={{ base: "35vh", md: "90vh" }} mt="2">
        <MotionImage
          alt="https://media.discordapp.net/attachments/810149188984897557/839135000255135794/Artboard_12_copy_2-100.jpg"
          src="https://media.discordapp.net/attachments/810149188984897557/839135000255135794/Artboard_12_copy_2-100.jpg"
          loading='lazy'
          h="100%"
          mx="auto"
        />
      </Box> */}
      <Divider mt="2" mb="4" />
      <Heading as="h2" fontSize={{ default: "xl", lg: "2xl" }} mb="4">
        Register Here
      </Heading>
      <Box width="100%" h={{ base: "65vh", md: "75vh" }} id="Forms">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfJQRZw4UJxRlKxwu9XF_4xesgNmfHNdiqOEPm0v9prZLzw2Q/viewform?embedded=true"
          width="100%"
          height="100%"
        >Loading…</iframe>
      </Box>
    </MotionBox>
  );
};

export default AiTalks;
