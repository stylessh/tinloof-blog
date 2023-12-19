import PostList from "@/components/post-list";

// This function gets called after build time, each 1 hour
export const revalidate = 3600; // Can be changed to a best value for your case

export default function Home() {
  return <PostList />;
}
