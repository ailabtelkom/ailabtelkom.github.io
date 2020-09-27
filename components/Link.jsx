import React from "react";
import NextLink from "next/link";
import { Link as ChakraLink, useColorMode } from "@chakra-ui/core";
const Link = ({
  route,
  href,
  linkAs,
  nextProps,
  children,
  isExternal,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const linkProps = {
    ...props,
    color: props.color || (colorMode === "dark" ? "blue.300" : "blue.500"),
    children,
  };
  if (route) {
    return (
      <NextLink as={linkAs} href={href} passHref>
        <ChakraLink {...linkProps} />
      </NextLink>
    );
  }
  return <ChakraLink href={href} {...linkProps} isExternal={isExternal} />;
};
Link.defaultProps = {
  route: false,
  isExternal: true,
};
export default Link;
