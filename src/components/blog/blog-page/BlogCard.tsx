
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BlogPost } from "@/data/newBlogPosts";

interface BlogCardProps {
  post: BlogPost;
  handleCategoryChange: (category: string | null) => void;
}

const BlogCard = ({ post, handleCategoryChange }: BlogCardProps) => {
  return (
    <Link to={`/blogs/${post.id}`} className="group">
      <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300">
        <div className="relative overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              // Using a more relevant tech/business image for fallback
              target.src = "";
            }}
          />
          <div 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleCategoryChange(post.category);
            }}
            className="absolute top-0 right-0 bg-pyn-blue text-white py-1 px-3 text-sm cursor-pointer hover:bg-pyn-darkBlue transition-colors"
          >
            {post.category}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-pyn-blue transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 mb-4 font-normal">
            {post.excerpt}
          </p>
          
          <Separator className="my-4" />
          
          <div className="flex justify-end">
            <span className="text-pyn-blue text-sm font-medium flex items-center group-hover:underline">
              Read more <ArrowRight className="ml-1 w-3 h-3" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
