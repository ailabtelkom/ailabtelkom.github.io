import React from "react";
import { Button } from "@chakra-ui/core";
// import { useControllableState } from "@chakra-ui/react";
import { motion } from "framer-motion";
const ButtonZoom = () => {
  const [Text, setText] = React.useState('Redirect to Zoom')
  const MotionButton = motion.custom(Button)
  return (
    <MotionButton
      // as="a"
      // href="https://google.com"
      // target="_blank"
      colorScheme="blue"
      onHoverStart={() => setText(`Join Us On \n
      23 Mei 2021 | 12:30 WIB`)}
      onHoverEnd={() => setText(`Redirect to Zoom`)}
      // whileTap={{ opacity: 0 }}
      onClick={() => {(Text===`Redirect to Zoom`)?setText(`Join Us On \n
      23 Mei 2021 | 12:30 WIB`):setText(`Redirect to Zoom`)}}
      // color={Color}
      fontSize={{ default: "md", lg: "xl" }}
      w="80%"
      h="8vh"
    >
      {Text? Text: "Redirect to Zoom"}
    </MotionButton>
  );
};

export default ButtonZoom;