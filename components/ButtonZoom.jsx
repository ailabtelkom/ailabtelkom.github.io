import React from "react";
import { Button, Box } from "@chakra-ui/core";
import { useControllableState } from "@chakra-ui/react";
import { motion } from "framer-motion";
const ButtonZoom = () => {
  const [Text, setText] = useControllableState({ defaultText: `Redirect to Zoom` })
  const MotionButton = motion.custom(Button)
  return (
    <Box mt="2" mb="2">
      <MotionButton
        as="a"
        href="https://us02web.zoom.us/j/87671154012?pwd=dlVmTk1VYTlQa3pxcENQSEJLK3hGZz09"
        target="_blank"
        colorScheme="blue"
        onHoverStart={() => setText(`Join Us On \n
        27 February 2021 | 19:30 WIB`)}
        onHoverEnd={() => setText(`Redirect to Zoom`)}
        // whileTap={{ opacity: 0 }}
        // onClick={() => {(Text===`Redirect to Zoom`)?setText(`Join Us On \n
        // 27 February 2021 | 19:30 WIB`):setText(`Redirect to Zoom`)}}
        // color={Color}
        fontSize={{ default: "md", lg: "xl" }}
        w="80%"
        h="8vh"
      >
        {Text? Text: "Redirect to Zoom"}
      </MotionButton>
    </Box>
  );
};

export default ButtonZoom;
