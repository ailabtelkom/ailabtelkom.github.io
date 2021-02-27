import React from "react";
import { Box, Button, Heading, useColorModeValue, useColorMode, Grid, Stack } from "@chakra-ui/core";
// import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const zoom = () => {
  const MotionBox = motion.custom(Box);
  const MotionButton = motion.custom(Button);
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
      h="100vh"
      justifyContent="center"
      textAlign="center"
    >
      <Box mb="4" bg="blue" mt="20%">
        <Heading fontSize={{ default: "lg", lg: "xl" }}>
          Topic       : Open Mind Lab Artificial Intelligence 
        </Heading>
        <Heading fontSize={{ default: "lg", lg: "xl" }}>
          Time        : Feb 27, 2021 07:30 PM Jakarta
        </Heading>
        <Heading fontSize={{ default: "lg", lg: "xl" }}>
          Meeting ID  : 876 7115 4012
        </Heading>
        <Heading fontSize={{ default: "lg", lg: "xl" }}>
          Passcode    : amazingAI
        </Heading>
      </Box>
      <MotionButton
        as="a"
        href="https://us02web.zoom.us/j/87671154012?pwd=dlVmTk1VYTlQa3pxcENQSEJLK3hGZz09"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity,  duration: 2, type: "spring" }}
        colorScheme="blue"
        fontSize={{ default: "sm", lg: "md" }}
        w={{ default: "50vw", md:"25vw"}}
        h="5vh"
      >
        {"Join Zoom"}
      </MotionButton>
    </MotionBox>
  );
};

export default zoom;
