import { Helmet } from "react-helmet";

import { BlogList, HeroImage, PageContainer } from "@components";

import type { ReactElement } from "react";

const Blog = (): ReactElement => {
  return (
    <>
      <HeroImage />
      <Helmet>
        <meta charSet="utf-8" />
        <title>📰 Blog</title>
      </Helmet>
      <PageContainer>
        <BlogList pageSize={12} categories={true} pagination={true} />
      </PageContainer>
    </>
  );
};

export default Blog;
