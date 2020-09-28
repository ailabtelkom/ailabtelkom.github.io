import {
  Box,
  Heading,
  Stack,
  Text,
  Code as InlineCode,
  List,
  ListItem,
  Divider,
  Image as ChakraImage,
} from "@chakra-ui/core";
import Link from "../components/Link";
import Code from "../components/Code";
const flatten = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

const slugifyChildren = (children) => {
  const arrayChildren = React.Children.toArray(children);
  const text = arrayChildren.reduce(flatten, "");
  const slug = text.toLowerCase().replace(/\W/g, "-");
  return slug;
};

export const contentRenderer = (colorMode) => ({
  root: (props) => <Stack spacing={4} {...props} />,
  blockquote: (props) => (
    <Box
      borderLeftColor="gray.400"
      borderLeftWidth={2}
      color={colorMode === "light" ? "gray.700" : "gray.500"}
      pl={8}
      py={4}
      {...props}
    />
  ),
  code: ({ language, value }) => (
    <Box pb={4} rounded="md">
      <Code language={language}>{value}</Code>
    </Box>
  ),
  heading: ({ level, children, ...props }) => {
    const id = slugifyChildren(children);
    const sizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
    return (
      <Heading as={`h${level}`} size={sizes[level - 1]} id={id} {...props}>
        {children}
      </Heading>
    );
  },
  image: (props) => {
    return (
      <React.Fragment>
        <Box mb={2}>
          <ChakraImage
            borderRadius="md"
            mx="auto"
            maxW="2xl"
            w="100%"
            {...props}
          />
        </Box>
        <Box fontSize="sm" textAlign="center">
          {props.alt}
        </Box>
      </React.Fragment>
    );
  },
  inlineCode: (props) => <InlineCode display="inline" {...props} />,
  link: (props) => <Link isExternal={!props.href.startsWith("#")} {...props} />,
  list: (props) => <List styleType="disc" {...props} />,
  listItem: (props) => <ListItem pl={4} {...props} />,
  paragraph: Text,
  table: (props) => (
    <Box overflow="auto">
      <Box as="table" {...props} />
    </Box>
  ),
  tableHead: (props) => <Box as="thead" fontWeight="bold" {...props} />,
  tableBody: (props) => <Box as="tbody" {...props} />,
  tableRow: (props) => <Box as="tr" {...props} />,
  tableCell: (props) => <Box as="td" borderWidth={1} p={2} {...props} />,
  thematicBreak: () => <Divider />,
});
