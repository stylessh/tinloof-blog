import { getTrucatedBody } from "@/lib/utils";
import { Post } from "@/types/data";

import Link from "next/link";

function PostItem({ post }: { post: Post }) {
  return (
    <article
      key={post.id}
      className="border-t border-main pt-4 pb-16 grid md:grid-cols-2 gap-x-10 gap-y-6"
    >
      <div>
        <h2 className="text-2xl md:text-4xl">
          <Link href="/[id]" as={`/${post.id}`} className="text-main">
            {post.title}
          </Link>
        </h2>

        <p className="text-lg mt-4 italic">{post.category.name}</p>
      </div>

      <p>
        <Link
          href="/[id]"
          as={`/${post.id}`}
          className="text-main text-sm md:text-base"
        >
          {getTrucatedBody(post.body)}
        </Link>
      </p>
    </article>
  );
}

export default PostItem;
