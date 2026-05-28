
import React from "react";
import BlogGrid from "./BlogGrid";
import CategoryFilter from "./CategoryFilter";
import BlogPagination from "./BlogPagination";
import { BlogPost } from "@/data/newBlogPosts";
import { Dispatch, SetStateAction } from "react";

interface BlogContentProps {
  currentPosts: BlogPost[];
  activeCategory: string | null;
  currentPage: number;
  totalPages: number;
  handleCategoryChange: (category: string | null) => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const BlogContent = ({
  currentPosts,
  activeCategory,
  currentPage,
  totalPages,
  handleCategoryChange,
  setCurrentPage,
}: BlogContentProps) => {
  return (
    <div className="lg:w-2/3">
      {/* Category Filter */}
      <CategoryFilter
        activeCategory={activeCategory}
        handleCategoryChange={handleCategoryChange}
      />

      {/* Blog Grid */}
      <div className="mt-8">
        <BlogGrid 
          posts={currentPosts} 
          handleCategoryChange={handleCategoryChange} 
        />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12">
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default BlogContent;
