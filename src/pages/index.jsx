import Jumbotron from "../components/Jumbotron";
function LandingPage() {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "100vh",
        scrollSnapType: "y mandatory",
      }}
    >
      <Jumbotron style={{ scrollSnapAlign: "start" }} />
      {/* <div style={{ height: "120vh", scrollSnapAlign: "start" }}>whew</div> */}
    </div>
  );
}

export default LandingPage;
