import { getSinglePost } from "@/lib/blog";

interface SinglePostPageProps {
  params: {
    postId: string;
  };
}

// We want this dynamically to change based on CMS data
export const dynamic = "force-dynamic";

async function SinglePostPage({ params }: SinglePostPageProps) {
  const { postId } = params;

  const post = await getSinglePost(postId);

  return (
    <section>
      <header className="border-b pb-10 border-main">
        <h1 className="text-8xl md:text-[8rem] tracking-tight leading-[80%] line-clamp-1">
          {post.title}
        </h1>
      </header>

      <article className="prose prose-lg max-w-none mt-10">{post.body}</article>
    </section>
  );
}

export default SinglePostPage;
