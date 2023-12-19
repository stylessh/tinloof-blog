export const getCategories = () => {
  // generate ten random categories from the posts
  const categories = [
    {
      id: 1,
      name: "Design",
      key: "design",
    },
    {
      id: 2,
      name: "Development",
      key: "development",
    },
    {
      id: 3,
      name: "Business",
      key: "business",
    },
    {
      id: 4,
      name: "Marketing",
      key: "marketing",
    },
    {
      id: 5,
      name: "Productivity",
      key: "productivity",
    },
    {
      id: 6,
      name: "Self",
      key: "self",
    },
    {
      id: 7,
      name: "Culture",
      key: "culture",
    },
    {
      id: 8,
      name: "Other",
      key: "other",
    },
  ];

  return categories;
};

export const getRandomCategory = () => {
  const categories = getCategories();
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  return randomCategory;
};

export const getTrucatedBody = (body: string) => {
  if (body.length > 150) {
    return body.slice(0, 180).concat("...");
  }

  return body;
};
