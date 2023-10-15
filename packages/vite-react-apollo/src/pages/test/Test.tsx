import { HeroImage } from "@components";
import Container from "@mui/material/Container";
import type { ReactElement } from "react";

const Test = (): ReactElement => {
  return (
    <>
      <HeroImage />
      <Container maxWidth="lg">
        <h1>Home</h1>
      </Container>
    </>
  );
};

export default Test;
