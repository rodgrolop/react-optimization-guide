import { Helmet } from "react-helmet";
import { LoginForm, AuthPageContainer } from "@components";

import { default as Grid } from "@mui/material/Unstable_Grid2";

import type { ReactElement } from "react";

import { styles } from "./styles";

const Login = (): ReactElement => {
  return (
    <AuthPageContainer>
      <Helmet>
        <title>🔓 Login</title>
      </Helmet>
      <Grid
        container={true}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={styles.formContainer}
        spacing={2}
      >
        <LoginForm />
      </Grid>
    </AuthPageContainer>
  );
};

export default Login;
