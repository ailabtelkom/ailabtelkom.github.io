import React from "react";
import { Button, Box } from "@chakra-ui/core";
import { motion } from "framer-motion";
const ButtonZoom = () => {
  const MotionButton = motion.custom(Button)
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
    </Box>
  );
};

export default ButtonZoom;
