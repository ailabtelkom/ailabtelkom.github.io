import React from "react";
import { Box, Heading, Divider, useColorModeValue, Button, useColorMode, Image, Skeleton } from "@chakra-ui/react";
import { motion } from "framer-motion";

const eittss = () => {
  const MotionBox = motion(Box)
  // const MotionImage = motion(Image)
  const MotionButton = motion(Button)
  const itemVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  }
  return (
    <MotionBox
      initial="start"
      animate="end"
      maxW={[null, null, "2xl", "5xl"]}
      m="auto"
      py="50px"
      textAlign="center"
      position="relative"
    >
      <Heading>
        EITTTS ga semudah itu hahaha😋
      </Heading>
      <Divider mt="2" mb="4" />

      <MotionBox mt="1">
        <Image
          alt="lolos ga ya"
          src="/assets/images/fotololos/meme1.jpg?webp"
          fallbackSrc="/assets/images/fotololos/meme1.jpg?lqip"
          loading='lazy'
          maxH={{ base: "60vh", lg: "60vh" }}
          mx="auto"
        />
      </MotionBox>

      <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
        Silakan chat ke OA LINE kami dulu chagideul
      </Heading>
      <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
        👇👇👇
      </Heading>
      <Divider mt="1" mb="1" />
      <MotionButton
        as="a"
        href="http://line.me/ti/p/~@jhf7225t"
        target="_blank"
        variants={itemVariant}
      >
        LINE
      </MotionButton>
      <Divider mt="1" mb="1" />
      <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
        👆👆👆
      </Heading>
    </MotionBox>
  );
};

export default eittss;
