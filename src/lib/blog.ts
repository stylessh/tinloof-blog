import { Post } from "@/types/data";
import { getRandomCategory } from "./utils";

export const appendRandomCategoryToPosts = (post: Post): Post => {
  const category = getRandomCategory();

  return {
    ...post,
    category,
  };
};

export const getPosts = async (
  selectedCategory: string | undefined
): Promise<Post[]> => {
  // limit to 10 posts for testing purposes
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  const posts = await data.json();

  return posts.map(appendRandomCategoryToPosts).filter((post: Post) => {
    if (!selectedCategory) {
      return true;
    }

    return post.category.key === selectedCategory;
  });
};

export const getSinglePost = async (id: string): Promise<Post> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const post = await data.json();

  return appendRandomCategoryToPosts(post);
};
