import Container from "@mui/material/Container";

import type { ReactElement } from "react";
import type { PageContainerProps } from "./PageContainerProps";

const AuthPageContainer = (props: PageContainerProps): ReactElement => (
  <Container
    maxWidth="lg"
    sx={{
      paddingTop: 9,
      paddingBottom: 12,
      display: "flex",
      flex: "1 1 auto",
    }}
  >
    {props.children}
  </Container>
);

export default AuthPageContainer;
