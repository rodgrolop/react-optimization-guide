import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ViewLoader, AppBar, Drawer, Footer } from "@components";

import type { ReactElement } from "react";

const GlobalLayout = (): ReactElement => (
  <>
    <AppBar />
    <Drawer />
    <Suspense fallback={<ViewLoader />}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
);

export default GlobalLayout;
