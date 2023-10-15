import { lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthenticationLayout, ProtectedLayout, GlobalLayout } from "@layout";

import { useGetMe } from "@authentication";
import { MainLoader } from "@components";
import { useRecoilValue } from "recoil";
import { userFetchStatusAtom } from "@atoms";

import type { ReactElement } from "react";

import { styles } from "./styles";

// Auth
const Login = lazy(() => import("./../pages/auth/login/Login"));

// Public
const Home = lazy(() => import("./../pages/home/Home"));
const Blog = lazy(() => import("./../pages/blog/blog/Blog"));
const About = lazy(() => import("./../pages/about/About"));
const SingleBlog = lazy(() => import("./../pages/blog/single-blog/SingleBlog"));

// Private
const Test = lazy(() => import("./../pages/test/Test"));

const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:blogSlug",
        element: <SingleBlog />,
      },
      {
        path: "about-me",
        element: <About />,
      },
    ],
  },
]);

const RouterProviderWrapper = (): ReactElement => {
  const { getMe } = useGetMe();
  const { loading } = useRecoilValue(userFetchStatusAtom);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && getMe();
  }, []);

  return loading ? (
    <MainLoader />
  ) : (
    <div style={styles.routerContainer}>
      <RouterProvider router={router} />
    </div>
  );
};

export default RouterProviderWrapper;
