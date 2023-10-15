import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@apollo-client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "@theme";
import RouterProvider from "@router";

import type { ReactElement } from "react";

const Main = (): ReactElement => (
  <ApolloProvider client={apolloClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider />
      </ThemeProvider>
    </RecoilRoot>
  </ApolloProvider>
);
export default Main;
