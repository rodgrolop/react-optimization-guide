import { default as Grid } from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";

import type { ReactElement } from "react";

import { styles } from "./styles";

const MainLoader = (): ReactElement => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={styles.loaderContainer}
  >
    <CircularProgress color="secondary" />
  </Grid>
);

export default MainLoader;
