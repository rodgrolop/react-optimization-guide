import { BlogList, DocumentHead, HeroImage, PageContainer } from "@components";

import type { VNode } from "preact";

const Blog = (): VNode => {
  return (
    <>
      <DocumentHead>
        <title>📰 Blog</title>
      </DocumentHead>
      <HeroImage />
      <PageContainer>
        <BlogList pageSize={12} categories={true} pagination={true} />
      </PageContainer>
    </>
  );
};

export default Blog;
