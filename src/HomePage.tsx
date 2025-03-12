import { styled } from "@mui/material";

const PageBackground = styled("div")({
  background: "#B3EBF2",
  height: "calc(100vh - 83px)",
});

const HomePage = () => {
  return (
    <PageBackground>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: "150px",
        }}
      >
        Home Page
      </div>
    </PageBackground>
  );
};

export default HomePage;
