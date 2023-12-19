/**
 * We assume this will be the layout for /blog/* pages
 *
 */

import BlogHeader from "@/components/blog-header";

export default function BlogListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background text-main max-w-[95%] mx-auto flex flex-col gap-y-12 md:gap-y-24 my-10">
      <BlogHeader />

      {children}
    </main>
  );
}
