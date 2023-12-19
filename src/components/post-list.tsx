import { getPosts } from "@/lib/blog";
import PostItem from "./post-item";

interface PostListProps {
  selectedCategory?: string;
}

async function PostList({ selectedCategory }: PostListProps) {
  const posts = await getPosts(selectedCategory);

  return (
    <section>
      {posts.map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}

      {posts.length === 0 && (
        <p className="text-2xl text-center my-10 border-t border-main py-6 italic">
          No posts found for{" "}
          {selectedCategory ? `category "${selectedCategory}"` : "any category"}
        </p>
      )}
    </section>
  );
}

export default PostList;
