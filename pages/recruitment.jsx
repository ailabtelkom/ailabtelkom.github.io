import React from "react";
import { Box, Button, Heading, Image, Text, Link } from "@chakra-ui/core";
import { motion } from "framer-motion";

const recruitment = () => {
  const MotionBox = motion.custom(Box);
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
        Open Recruitment ASLAB Artificial Intelligence laboratory 2021
      </Heading>
      <Text>👊👊👊👊👊</Text>
      <Link href="http://bit.ly/aslabAIkuy" isExternal>
        <Button colorScheme="red">{">>Daftar skuy<<<"}</Button>
      </Link>
      <Box width="100%" h={{ base: "75vh", md: "90vh" }} mt="2">
        <iframe
          src="https://drive.google.com/file/d/1d8YiE4DXJBum-Liaayh5T1jNK2fJ8vY6/preview"
          width="100%"
          height="100%"
        ></iframe>
      </Box>
      <Image
        width={{ base: "100px", md: "200px" }}
        position="absolute"
        bottom={1}
        left={0}
        src="/img/uncle_sam.png"
        alt="we want you"
      />
      <Image
        width={{ base: "100px", md: "200px" }}
        position="absolute"
        top="160px"
        right={0}
        src="https://www.memesmonkey.com/images/memesmonkey/3b/3bc03709bdd2d65178f806816cda9e70.jpeg"
        alt="we want you"
      />
      <Image
        width={{ base: "100px", md: "200px" }}
        position="absolute"
        top="160px"
        left={{ base: "0", md: "-20px" }}
        src="https://cdn.kapwing.com/video_image-Urvztiziu.jpeg"
        alt="we want you"
      />
    </MotionBox>
  );
};

export default recruitment;
