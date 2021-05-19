import React from "react";
import { Button, Box, Skeleton, Image } from "@chakra-ui/core";
import { motion } from "framer-motion";
const ButtonZoom = () => {
  const MotionButton = motion.custom(Button)
  const MotionBox = motion.custom(Box)
  const [showSkelton, setShowSkelton] = React.useState(false);
  return (
    <Box mt="2" mb="2">
      <MotionButton
        as="a"
        href="#Forms"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity,  duration: 2, type: "spring" }}
        colorScheme="blue"
        fontSize={{ default: "sm", lg: "md" }}
        w={{ default: "50vw", md:"25vw", lg: "20%" }}
        h="5vh"
      >
        {">>Register Here<<"}
      </MotionButton>
      <MotionBox mt="1">
        <Skeleton isLoaded={showSkelton}>
        <Image
          alt="AiTalks : Episode 1"
          src="/assets/images/AiTalksEps1.jpg?webp"
          fallbackSrc="/assets/images/AiTalksEps1.jpg?lqip"
          loading='lazy'
          maxH={{ default: "70vh", lg: "75vh" }}
          mx="auto"
          onLoad={()=>setShowSkelton(true)}
        />
        </Skeleton>
      </MotionBox>
    </Box>
  );
};

export default ButtonZoom;
