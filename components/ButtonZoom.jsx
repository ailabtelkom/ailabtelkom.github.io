import React from "react";
import { Button } from "@chakra-ui/core";
import { useControllableState } from "@chakra-ui/react";
import { motion } from "framer-motion";
const ButtonZoom = () => {
  const [Text, setText] = useControllableState({ defaultText: `Redirect to Zoom` })
  const MotionButton = motion.custom(Button)
  return (
    <MotionButton
      // as="a"
      // href="https://google.com"
      // target="_blank"
      colorScheme="blue"
      onHoverStart={() => setText(`Join Us On \n
      27 February 2021 | 19:00 WIB`)}
      onHoverEnd={() => setText(`Redirect to Zoom`)}
      // whileTap={{ opacity: 0 }}
      onClick={() => {(Text===`Redirect to Zoom`)?setText(`Join Us On \n
      27 February 2021 | 19:00 WIB`):setText(`Redirect to Zoom`)}}
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
