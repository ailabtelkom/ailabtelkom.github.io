import React from "react";
import { Box, Heading, Divider, useColorModeValue, Button, useColorMode, Grid, Stack, Skeleton } from "@chakra-ui/react";
// import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ButtonZoom from "../components/ButtonZoom";
// import ClickMe from "../components/ButtonAiTalks";

const openMind = () => {
  const MotionBox = motion(Box)
  const [showSkelton, setShowSkelton] = React.useState(false);
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
      <Heading mt="2" fontSize={{ base: "2xl", lg: "3xl" }}>
        Open Mind Artificial Intelligence laboratory 2021
      </Heading>
      <Divider mt="2" mb="4" />
      <ButtonZoom/>
      {/* <ClickMe/> */}
      <Heading as="h2" fontSize={{ base: "lg", lg: "xl" }} mb="4" mt="2">
        What Is Artificial Intelligence laboratory???
      </Heading>
      <Skeleton isLoaded={showSkelton}>
        <Box width="100%" h={{ base: "35vh", md: "70vh" }} mt="2">
          <iframe
            src="https://drive.google.com/file/d/1ro6hjBbqPXf3egQz2VQU40HaHHvuaRj-/preview"
            width="100%"
            height="100%"
            onLoad={ () => setShowSkelton(true) }
          >Video AI Laboratory</iframe>
        </Box>
      </Skeleton>
      <Grid
        h={{ base: "30vh", md: "50vh", lg: "70vh" }}
        mt="5"
        mb="5"
        templateColumns="repeat(4, 1fr)"
        gap={{ base: 3, md: 4 }}
      >
        {/* <Grid
          h="100%"
          gridTemplateRows="repeat(2, 1fr)"
          gap={6}
        > */}
        <Stack spacing={{ base: 3, md: 4}}>
          <Box w="100%" h="100%" bg="blue.500" 
            bgImage="url('/assets/images/gallery1.jpg?webp')"
            bgSize="auto 120%"
            bgPos="center"
            bgRepeat="no-repeat"
          />
          <Box w="100%" h="50%" bg="blue.500" 
            bgImage="url('/assets/images/gallery2.jpg?webp')"
            bgSize="auto 100%"
            bgPosition="center"
            bgRepeat="no-repeat"
          />
        </Stack>
        <Stack spacing={{ base: 3, md: 4 }}>
          <Box w="100%" h="50%" bg="blue.500" 
            bgImage="url('/assets/images/gallery5.jpg?webp')"
            bgSize="110% auto"
            bgPos="center"
            bgRepeat="no-repeat"
          />
          <Box w="100%" h="100%" bg="blue.500" 
            bgImage="url('/assets/images/gallery3.jpg?webp')"
            bgSize="auto 100%"
            bgPosition="center"
            bgRepeat="no-repeat"
          />
        </Stack>
        <Stack spacing={{ base: 3, md: 4 }}>
          <Box w="100%" h="100%" bg="blue.500" 
            bgImage="url('/assets/images/gallery7.jpg?webp')"
            bgSize="auto 100%"
            bgPos="center"
            bgRepeat="no-repeat" 
          />
          <Box w="100%" h="50%" bg="blue.500" 
            bgImage="url('/assets/images/gallery6.jpg?webp')"
            bgSize="auto 100%"
            bgPosition="center"
            bgRepeat="no-repeat"
          />
        </Stack>
        <Stack spacing={{ base: 3, md: 4 }}>
          <Box w="100%" h="50%" bg="blue.500" 
            bgImage="url('/assets/images/gallery4.jpg?webp')"
            bgSize="100% auto"
            bgPos="center"
            bgRepeat="no-repeat"
          />
          <Box w="100%" h="100%" bg="blue.500" 
            bgImage="url('/assets/images/gallery8.jpg?webp')"
            bgSize="auto 120%"
            bgPosition="center"
            bgRepeat="no-repeat"
          />
        </Stack>
        </Grid>
      <Divider mt="2" mb="4" />
      <Heading as="h2" fontSize={{ base: "xl", lg: "2xl" }} mb="4">
        Fill The Questionaire Here
      </Heading>
      <Box width="100%" h={{ base: "65vh", md: "75vh" }} id="Forms">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScUlrvrtFvYtairbLpCrC7vDMEmtsY63DgI962bm0q66VHlWA/viewform?usp=sf_link"
          width="100%"
          height="100%"
        >Loading…</iframe>
      </Box>
    </MotionBox>
  );
};

export default openMind;
