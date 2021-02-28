import React from "react";
import { Box, Button, Heading, Image, Divider, Collapse, useColorModeValue, useColorMode } from "@chakra-ui/core";
import { motion } from "framer-motion";
import ColapseDoc from "../components/ColapseDoc"

const openRecruitment = () => {
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
      <Divider mt="2" mb="4" />
      <ColapseDoc/>
    </MotionBox>
  );
};

export default openRecruitment;
