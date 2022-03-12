import React from "react";
import { Button } from "@chakra-ui/react";
// import { useControllableState } from "@chakra-ui/react";
import { motion } from "framer-motion";
const ButtonZoom = () => {
  const [Text, setText] = React.useState('Redirect to Zoom')
  const MotionButton = motion(Button)
  return (
    <MotionButton
      as="a"
      href="https://telkomuniversity-ac-id.zoom.us/j/92323205493"
      target="_blank"
      colorScheme="blue"
      onHoverStart={() => setText(`Join Us On \n
      March 12th, 2022 | 19:00 WIB`)}
      onHoverEnd={() => setText(`Redirect to Zoom`)}
      // whileTap={{ opacity: 0 }}
      onClick={() => {(Text===`Redirect to Zoom`)?setText(`Join Us On \n
      March 21th, 2022 | 19:00 WIB`):setText(`Redirect to Zoom`)}}
      // color={Color}
      fontSize={{ base: "md", lg: "xl" }}
      w="80%"
      h="8vh"
    >
      {Text? Text: "Redirect to Zoom"}
    </MotionButton>
  );
};

export default ButtonZoom;