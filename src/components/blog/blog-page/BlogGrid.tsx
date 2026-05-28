
import React from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/data/newBlogPosts";
import { Button } from "@/components/ui/button";

interface BlogGridProps {
  posts: BlogPost[];
  handleCategoryChange: (category: string | null) => void;
}

const BlogGrid = ({ posts, handleCategoryChange }: BlogGridProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-medium mb-2">No posts found</h3>
        <p className="text-gray-500 mb-4">There are no posts matching your current filter.</p>
        <Button onClick={() => handleCategoryChange(null)}>View All Posts</Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          handleCategoryChange={handleCategoryChange} 
        />
      ))}
    </div>
  );
};

export default BlogGrid;
