import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaBars,
  FaChevronDown,
  FaLanguage,
  FaImages,
} from "react-icons/fa";
import Link from "./Link";
import { useRouter } from "next/router";
const ResourcesDropdown = () => {
  return (
    <Menu>
      <MenuButton textAlign="left" p={{ base: 2, lg: 0 }}>
        Resource <Icon as={FaChevronDown} />
      </MenuButton>
      <MenuList>
        <MenuItem as={Link} href="/resources/nlp" route>
          <Icon as={FaLanguage} mr="2" /> NLP Bahasa
        </MenuItem>
        <MenuItem as={Link} href="/resources/image" route>
          <Icon as={FaImages} mr="2" /> Image
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
const Navbar = () => {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const Icons = useColorModeValue(<FaSun />, <FaMoon />);
  const color = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("white", "#1A202C");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      p={2}
      px={{ base: 4, lg: 5 }}
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
          <ResourcesDropdown />
          {/* <Link route href="/member" color={color}>
            Member
          </Link> */}
          <Link route href="/about" color={color}>
            About
          </Link>
          <Link
            route
            href="/openmind"
            color={color}
            fontWeight="bold"
            className="blink"
          >
            {'OPENMIND 2023'}
          </Link>
        </Stack>
      </Stack>
      <Stack direction="row">
        <IconButton
          variant="transparent"
          w="3vw"
          onClick={toggleColorMode}
          icon={Icons}
        />
        <IconButton
          d={{ base: "flex", lg: "none" }}
          variant="transparent"
          w="3vw"
          onClick={onOpen}
          icon={<FaBars />}
        />
      </Stack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
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
                <ResourcesDropdown />
                {/* <Link p="2" route href="/member" color={color}>
                  Member
                </Link> */}
                <Link p="2" route href="/about" color={color}>
                  About
                </Link>
                <Link
                  p="2"
                  route
                  href="/openmind"
                  color={color}
                  fontWeight="bold"
                  className="blink"
                >
                  {'OPENMIND 2023'}
                </Link>
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Text fontSize="sm">
                Made with ❤️ by{" "}
                <Link isExternal href="https://github.com/svspicious">
                  @svspicious
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
