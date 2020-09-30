import { Box, Button, Link, Spinner, useColorMode } from "@chakra-ui/core";
import React from "react";
import { getNlpData } from "../../utils/resourceHooks";
import Markdown from "react-markdown";
import { contentRenderer } from "../../utils/renderer";
import { FaGithub } from "react-icons/fa";
const nlp = () => {
  const { data, isLoading } = getNlpData();
  const { colorMode } = useColorMode();
  return (
    <Box
      pt="80px"
      pb="50px"
      maxW={[null, null, "2xl", "5xl"]}
      m="auto"
      px={{ default: 6, md: 0 }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Markdown
            source={data.content}
            // escapeHtml={false}
            renderers={contentRenderer(colorMode)}
          />
          <Link
            href="https://github.com/ailabtelkom/id-NLP-resources"
            isExternal
          >
            <Button mt="4" leftIcon={<FaGithub />} size="sm">
              Contribute
            </Button>
          </Link>
        </React.Fragment>
      )}
    </Box>
  );
};

export default nlp;
