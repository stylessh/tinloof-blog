"use client";

import { getCategories } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const categories = getCategories();

function PostFilter() {
  const router = useRouter();
  const params = useParams();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const categoryId = event.target.value;

    if (!categoryId) {
      router.push("/");
      return;
    }

    router.push(`/c/${categoryId}`);
  };

  return (
    <div>
      <select
        value={params.category || ""}
        onChange={handleChange}
        className="py-4 hover:underline cursor-pointer outline-none w-20 md:w-[calc(100%+0.5rem)]"
      >
        <option value="">Filter</option>

        {categories.map((category) => {
          return (
            <option key={category.id} value={category.key}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default PostFilter;
