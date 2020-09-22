import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/core";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/core";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import Link from "./Link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const Icons = useColorModeValue(<FaSun />, <FaMoon />);
  const color = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("white", "#1A202C");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY < 20;
      if (top !== isTop) {
        setIsTop(top);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      style={{
        background:
          router.pathname === "/"
            ? "transparent"
            : isTop
            ? "transparent"
            : bgColor,
      }}
      w="full"
      position="fixed"
      top
      zIndex={1}
      p={3}
      px={{ default: 4, lg: 5 }}
      d="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={5}>
        <Link route href="/" fontWeight="bold" color={color}>
          #AmazingAI
        </Link>
        <Stack spacing={5} direction="row" d={{ base: "none", lg: "flex" }}>
          <Link route href="/research" color={color}>
            Research
          </Link>
          <Link route href="/playground" color={color}>
            Playground
          </Link>
          <Link route href="/about" color={color}>
            About
          </Link>
        </Stack>
      </Stack>
      <Stack direction="row">
        <IconButton
          variant="transparent"
          size="sm"
          onClick={toggleColorMode}
          icon={Icons}
        />
        <IconButton
          d={{ base: "flex", lg: "none" }}
          variant="transparent"
          size="sm"
          onClick={onOpen}
          icon={<FaBars />}
          ref={btnRef}
        />
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay zIndex={999}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>AI Laboratory</DrawerHeader>

            <DrawerBody>
              <Stack>
                <Link p="2" route href="/research" color={color}>
                  Research
                </Link>
                <Link p="2" route href="/playground" color={color}>
                  Playground
                </Link>
                <Link p="2" route href="/about" color={color}>
                  About
                </Link>
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Text fontSize="sm">
                Developed by{" "}
                <Link isExternal href="https://wisesa.dev">
                  @raisoturu
                </Link>
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;
