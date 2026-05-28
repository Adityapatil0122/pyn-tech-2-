
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";
import blogPosts from "@/data/blogPosts";

interface BlogCategoryCardProps {
  currentCategory: string;
}

interface CategoryCount {
  name: string;
  count: number;
}

const BlogCategoryCard = ({ currentCategory }: BlogCategoryCardProps) => {
  const [categories, setCategories] = useState<CategoryCount[]>([]);
  
  useEffect(() => {
    // Extract categories and count
    const categoriesMap = blogPosts.reduce((acc, post) => {
      if (!acc[post.category]) {
        acc[post.category] = 0;
      }
      acc[post.category]++;
      return acc;
    }, {} as Record<string, number>);

    // Convert to array and sort by count (most posts first)
    const categoriesArray = Object.entries(categoriesMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    setCategories(categoriesArray);
  }, []);

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-gray-100 flex items-center space-x-2">
        <Bookmark className="w-5 h-5 text-pyn-blue" />
        <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
      </div>
      
      <div className="p-4 grid gap-1.5">
        <Link 
          to="/blogs"
          className={`flex items-center justify-between px-3 py-2 rounded-md text-sm ${
            currentCategory === "" 
              ? "bg-pyn-blue/10 text-pyn-blue font-medium" 
              : "text-gray-700 hover:bg-gray-50 hover:text-pyn-blue"
          } transition-colors`}
        >
          <span>All</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            currentCategory === "" 
              ? "bg-pyn-blue text-white" 
              : "bg-gray-100 text-gray-700"
          }`}>
            {blogPosts.length}
          </span>
        </Link>
        
        {categories.map((category) => (
          <Link 
            key={category.name}
            to={`/blogs?category=${encodeURIComponent(category.name)}`}
            className={`flex items-center justify-between px-3 py-2 rounded-md text-sm ${
              currentCategory === category.name 
                ? "bg-pyn-blue/10 text-pyn-blue font-medium" 
                : "text-gray-700 hover:bg-gray-50 hover:text-pyn-blue"
            } transition-colors`}
          >
            <span>{category.name}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              currentCategory === category.name 
                ? "bg-pyn-blue text-white" 
                : "bg-gray-100 text-gray-700"
            }`}>
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryCard;
