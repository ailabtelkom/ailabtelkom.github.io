import React from "react";
import { Box, Button, Heading, Image, Text, Link, Divider, SimpleGrid, useColorModeValue, useColorMode } from "@chakra-ui/core";
import { motion } from "framer-motion";
import activities from "../data/activities";

const recruitment = () => {
  const MotionBox = motion.custom(Box);
  const bgColor = useColorModeValue("white", "gray.700");
  const itemVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };  
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
      <Heading>
        Open Recruitment Artificial Intelligence laboratory 2021
      </Heading>
      <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
        <iframe
          src="https://drive.google.com/file/d/1xZcqU14U9j361ngTp_mz9lG2qcc3Nkvg/preview"
          width="100%"
          height="100%"
        >Loading…</iframe>
      </Box>
      <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdX_G3dE910skx3q4Xap32wc-5QOArj5kA0qCctCpIox0LI9Q/viewform?embedded=true"
          width="100%"
          height="100%"
        >Loading…</iframe>
      </Box>
    </MotionBox>
  );
};

export default recruitment;
