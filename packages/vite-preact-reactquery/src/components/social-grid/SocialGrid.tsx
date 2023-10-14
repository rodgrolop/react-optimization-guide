import { default as Grid } from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import type { VNode } from "preact";
import { Link } from "react-router-dom";

const SocialGrid = (): VNode => (
  <Grid
    container={true}
    direction="row"
    justifyContent="center"
    alignItems="center"
    sx={{ marginBottom: 1 }}
  >
    <IconButton
      aria-label={"Github"}
      sx={{ fontSize: 30 }}
      size="large"
      onClick={() => window.open("https://github.com/", "_blank")}
    >
      <GitHubIcon />
    </IconButton>
    <IconButton
      aria-label={"Github"}
      sx={{ fontSize: 30 }}
      size="large"
      onClick={() => window.open("https://www.linkedin.com/", "_blank")}
    >
      <LinkedInIcon />
    </IconButton>
    <IconButton
      component={Link}
      aria-label={"Github"}
      sx={{ fontSize: 30 }}
      size="large"
      to="mailto:hari@seldon.com"
    >
      <EmailIcon />
    </IconButton>
  </Grid>
);

export default SocialGrid;
