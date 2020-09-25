import { Box } from "@chakra-ui/core";
import Jumbotron from "../components/Jumbotron";
function LandingPage() {
  return (
    <Box
      style={{
        // overflowY: "scroll",
        height: "100vh",
        scrollSnapType: "y mandatory",
      }}
    >
      <Jumbotron style={{ scrollSnapAlign: "start" }} />
      {/* <div style={{ height: "120vh", scrollSnapAlign: "start" }}>whew</div> */}
    </Box>
  );
}

export default LandingPage;
