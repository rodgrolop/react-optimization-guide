import { singleBlogProps } from "@utils";

export const sharePost = (event: any, post: singleBlogProps): void => {
  event.preventDefault();
  navigator.share({
    url: `/blog/${post.Slug}`,
    title: post.Title,
    text: post.Excerpt,
  });
};
