import React from "react";
import { Button, Box, Skeleton, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
const ButtonZoom = () => {
  const MotionButton = motion(Button)
  const MotionBox = motion(Box)
  const [showSkelton, setShowSkelton] = React.useState(false);
  return (
    <Box mb="2">
      <MotionButton
        as="a"
        href="#Forms"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity,  duration: 2, type: "spring" }}
        colorScheme="blue"
        fontSize={{ base: "sm", lg: "md" }}
        w={{ base: "50vw", md:"25vw", lg: "20%" }}
        h="5vh"
      >
        {">>Register Here<<"}
      </MotionButton>
      <MotionBox mt="1">
        <Skeleton isLoaded={showSkelton}>
        <Image
          alt="AiTalks : Episode 2"
          src="/assets/images/AiTalksEps2.jpg?webp"
          fallbackSrc="/assets/images/AiTalksEps2.png?lqip"
          loading='lazy'
          maxH={{ base: "70vh", lg: "75vh" }}
          mx="auto"
          onLoad={()=>setShowSkelton(true)}
        />
        </Skeleton>
      </MotionBox>
    </Box>
  );
};

export default ButtonZoom;
