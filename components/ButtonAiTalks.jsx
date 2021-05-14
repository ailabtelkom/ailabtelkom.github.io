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
          alt="https://media.discordapp.net/attachments/810149188984897557/839135003350663178/Artboard_4_copy-100.jpg"
          src="https://cdn.discordapp.com/attachments/810149188984897557/839135003350663178/Artboard_4_copy-100.jpg"
          loading='lazy'
          maxH="70vh"
          mx="auto"
          onLoad={()=>setShowSkelton(true)}
        />
        </Skeleton>
      </MotionBox>
    </Box>
  );
};

export default ButtonZoom;
