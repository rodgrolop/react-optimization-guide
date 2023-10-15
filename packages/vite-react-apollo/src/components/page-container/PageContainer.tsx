import Container from "@mui/material/Container";

import type { ReactElement } from "react";
import type { PageContainerProps } from "./PageContainerProps";

const PageContainer = (props: PageContainerProps): ReactElement => (
  <Container
    maxWidth="lg"
    sx={{
      paddingTop: 6,
      paddingBottom: 10,
    }}
  >
    {props.children}
  </Container>
);

export default PageContainer;
