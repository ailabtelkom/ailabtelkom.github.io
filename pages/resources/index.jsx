import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "../../components/Link";
import { Code, Box } from "@chakra-ui/core";
import { NextSeo } from "next-seo";
const index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/resources/nlp");
  }, []);
  return (
    <Box pt="80px" px={{ default: 6, md: 0 }}>
      <NextSeo title="Resources" />
      <Link href="/resources/nlp" route>
        Redirecting to <Code>/resources/nlp</Code>
      </Link>
    </Box>
  );
};

export default index;
