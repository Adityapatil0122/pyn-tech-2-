
import React, { useState, useEffect } from "react";
import { ArrowLeft, X } from "lucide-react";
import blogPosts from "@/data/newBlogPosts";

interface CategoryFilterProps {
  activeCategory: string | null;
  handleCategoryChange: (category: string | null) => void;
}

const CategoryFilter = ({
  activeCategory,
  handleCategoryChange,
}: CategoryFilterProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  // Extract unique categories once when component mounts
  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(blogPosts.map((post) => post.category))
    ).sort();
    setCategories(uniqueCategories);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Latest Articles</h2>
        {activeCategory && (
          <button
            onClick={() => handleCategoryChange(null)}
            className="flex items-center text-pyn-blue text-sm font-medium hover:underline"
          >
            <ArrowLeft className="w-3 h-3 mr-1" />
            All Posts
          </button>
        )}
      </div>

      {activeCategory && (
        <div className="mb-6 inline-flex items-center bg-pyn-blue/10 text-pyn-blue px-4 py-2 rounded-full">
          <span className="mr-2 text-sm font-medium">Category: {activeCategory}</span>
          <button
            onClick={() => handleCategoryChange(null)}
            className="p-1 rounded-full hover:bg-pyn-blue/20 transition-colors"
            aria-label="Clear filter"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              activeCategory === category
                ? "bg-pyn-blue text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
