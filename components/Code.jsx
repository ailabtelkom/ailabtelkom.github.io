import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useColorMode } from "@chakra-ui/core";
import {
  atomOneDark as themeDark,
  atomOneLight as themeLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
const Code = ({ language, ...props }) => {
  const { colorMode } = useColorMode();
  const light = {
    ...themeLight,
    hljs: {
      ...themeLight.hljs,
      borderRadius: "inherit",
    },
  };
  const dark = {
    ...themeDark,
    hljs: {
      ...themeDark.hljs,
      background: "#2D3748",
      borderRadius: "inherit",
    },
  };
  return (
    <SyntaxHighlighter
      language={language}
      style={colorMode === "light" ? light : dark}
      {...props}
    />
  );
};
export default Code;
