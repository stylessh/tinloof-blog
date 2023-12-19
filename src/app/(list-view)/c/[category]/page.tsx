import PostList from "@/components/post-list";
import { getCategories } from "@/lib/utils";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// This function gets called after build time, each 1 hour
export const revalidate = 3600; // Can be changed to a best value for your case

export default function CategoryPage({ params }: CategoryPageProps) {
  return <PostList selectedCategory={params.category} />;
}
