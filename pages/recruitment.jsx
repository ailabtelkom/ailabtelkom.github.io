import React from "react";
import { Box, Button, Heading, Image, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const recruitment = () => {
  const MotionBox = motion(Box)
  // const itemVariant = {
  //   start: { y: 20, opacity: 0 },
  //   end: { y: 0, opacity: 1 },
  // };
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
        Open Recruitment ASLAB Artificial Intelligence laboratory 2022
      </Heading>
      <Text>👊👊👊👊👊</Text>
      <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
        <iframe
          src="https://drive.google.com/file/d/1_L_ke8iWlHQbrNLvA0dGoVBUsBSSU8ZB/preview"
          width="100%"
          height="100%"
        ></iframe>
      </Box>
      <Image
        width={{ base: "100px", md: "200px" }}
        position="absolute"
        top={{ base: "78vh", md: "80vh" }}
        left={0}
        src="/img/uncle_sam.png"
        alt="we want you 1"
      />
      <Image
        width={{ base: "100px", md: "200px" }}
        position="absolute"
        top="160px"
        right={0}
        src="https://www.memesmonkey.com/images/memesmonkey/3b/3bc03709bdd2d65178f806816cda9e70.jpeg"
        alt="we want you 2"
      />
      <Image
        width={{ base: "100px", md: "200px" }}
        position="absolute"
        top="160px"
        left={{ base: "0", md: "-20px" }}
        src="https://cdn.kapwing.com/video_image-Urvztiziu.jpeg"
        alt="we want you 3"
      />
      <Heading as="h2" fontSize={{ base: "xl", lg: "2xl" }} mb="4" mt="8">
        Kuyy Daftar!!!
      </Heading>
      <Box width="100%" h={{ base: "65vh", md: "75vh" }} id="Forms">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeUDGKwzW3F3bep4LeolTRG_mvB5nc8HOIlrl_90KcrK0ffew/viewform?embedded=true"
          width="100%"
          height="100%"
        >Loading…</iframe>
      </Box>
    </MotionBox>
  );
};

export default recruitment;
