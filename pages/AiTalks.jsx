import React from "react";
import { Box, Heading, Divider, useColorModeValue, Button, useColorMode, Image, Skeleton } from "@chakra-ui/react";
// import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import ButtonZoom from "../components/ButtonZoom";
import ButtonAiTalks from "../components/ButtonAiTalks";

const AiTalks = () => {
  const MotionBox = motion(Box)
  const MotionImage = motion(Image)
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
      <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
        AI TALKS  - Episode 2
      </Heading>
      
      <Divider mt="2" mb="4" />

      <ButtonAiTalks/>

      <Divider mt="2" mb="4" />
      
      <Heading as="h2" fontSize={{ base: "xl", lg: "2xl" }} mb="4">
        Register Here
      </Heading>
      <Box width="100%" h={{ base: "65vh", md: "75vh" }} id="Forms">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSck3YP3hv0s1Qs3_Pcoq1IRE5VnzmwhRMJZAOM2qf7nzs0IoQ/viewform?embedded=true"
          width="100%"
          height="100%"
        >Loading…</iframe>
      </Box>
    </MotionBox>
  );
};

export default AiTalks;
