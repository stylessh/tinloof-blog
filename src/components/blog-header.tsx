import React, { Suspense } from "react";
import PostFilter from "./post-filter";

function BlogHeader() {
  return (
    <header className="flex items-end justify-between">
      <h1 className="text-8xl md:text-[15rem] tracking-tight leading-[80%]">
        Blog
      </h1>

      <Suspense
        fallback={
          <div className="w-20 h-4 md:w-32 md:h-6 rounded-md bg-main/50 animate-pulse"></div>
        }
      >
        <PostFilter />
      </Suspense>
    </header>
  );
}

export default BlogHeader;
