import React from "react";

function SinglePostLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-background text-main max-w-[95%] mx-auto flex flex-col gap-y-12 md:gap-y-24 my-10">
      {children}
    </main>
  );
}

export default SinglePostLayout;
