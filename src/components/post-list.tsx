import Link from "next/link";
import { getPosts } from "@/lib/blog";
import { getTrucatedBody } from "@/lib/utils";

interface PostListProps {
  selectedCategory?: string;
}

async function PostList({ selectedCategory }: PostListProps) {
  const posts = await getPosts(selectedCategory);

  return (
    <section>
      {posts.map((post) => {
        return (
          <article
            key={post.id}
            className="border-t border-main pt-4 pb-16 grid md:grid-cols-2 gap-x-10 gap-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-4xl">
                <Link
                  href="/[id]"
                  as={`/${post.id}`}
                  className="text-main"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-lg mt-4 italic">{post.category.name}</p>
            </div>

            <p>
              <Link
                href="/blog/[id]"
                as={`/blog/${post.id}`}
                className="text-main text-sm md:text-base"
              >
                {getTrucatedBody(post.body)}
              </Link>
            </p>
          </article>
        );
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
