import React from "react";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/core";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const Icons = useColorModeValue(<FaSun />, <FaMoon />);
  return (
    <Box
      w="full"
      position="fixed"
      top
      zIndex={1000}
      p={1}
      px={{ default: 1, lg: 5 }}
      textAlign="right"
    >
      <IconButton
        variant="transparent"
        size="sm"
        onClick={toggleColorMode}
        icon={Icons}
      />
    </Box>
  );
};

export default Navbar;
