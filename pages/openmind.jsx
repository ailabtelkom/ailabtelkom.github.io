import React from "react";
import { Box, Heading, Divider, useColorModeValue, useColorMode } from "@chakra-ui/core";
import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
      <Heading mt="2" fontSize={{ default: "2xl", lg: "3xl" }}>
        Open Mind Artificial Intelligence laboratory 2021
      </Heading>
      <Divider mt="2" mb="4" />
      <Heading as="h3" fontSize={{ default: "lg", lg: "xl" }} mb="4">
        What Is Artificial Intelligence laboratory???
      </Heading>
      <Box width="100%" h={{ base: "35vh", md: "70vh" }} mt="2">
        <iframe
          src="https://drive.google.com/file/d/17aWrn7IPJFMgoIjjRsazBH0wjSxAolbS/preview"
          width="100%"
          height="100%"
        >Video AI Laboratory</iframe>
      </Box>
      <Grid
        h="70vh"
        mt="10"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        <GridItem rowSpan={2} colSpan={1} 
          bgImage="url('/assets/images/gallery1.jpg?webp')"
          bgSize="auto 120%"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
        <GridItem rowSpan={1} colSpan={1}
          bgImage="url('/assets/images/gallery5.jpg?webp')"
          bgSize="100% auto"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
        <GridItem rowSpan={2} colSpan={1}
          bgImage="url('/assets/images/gallery7.jpg?webp')"
          bgSize="auto 100%"
          bgPosition="center"
          bgRepeat="no-repeat" 
        />
        <GridItem rowSpan={1} colSpan={1} 
          bgImage="url('/assets/images/gallery4.jpg?webp')"
          bgSize="100% auto"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
        <GridItem rowSpan={2} colSpan={1}
          bgImage="url('/assets/images/gallery3.jpg?webp')"
          bgSize="auto 100%"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
        <GridItem rowSpan={2} colSpan={1}
          bgImage="url('/assets/images/gallery8.jpg?webp')"
          bgSize="auto 120%"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
        <GridItem rowSpan={1} colSpan={1}
          bgImage="url('/assets/images/gallery2.jpg?webp')"
          bgSize="100% auto"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
        <GridItem rowSpan={1} colSpan={1}
          bgImage="url('/assets/images/gallery6.jpg?webp')"
          bgSize="100% auto"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
      </Grid>
      <Divider mt="2" mb="4" />
      <Heading as="h3" fontSize={{ default: "lg", lg: "xl" }} mb="4">
        Let's Join With Us
      </Heading>
      <Box width="100%" h={{ base: "65vh", md: "75vh" }}>
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