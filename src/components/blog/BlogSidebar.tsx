
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Tag } from "lucide-react";
import blogPosts from "@/data/newBlogPosts";
import { Card } from "@/components/ui/card";
import BlogSearch from "./blog-page/BlogSearch";

interface BlogSidebarProps {
  currentCategory: string | null;
}

interface CategoryCount {
  name: string;
  count: number;
}

const BlogSidebar = ({ currentCategory }: BlogSidebarProps) => {
  const [categories, setCategories] = useState<CategoryCount[]>([]);
  const recentPosts = blogPosts.slice(0, 5);
  const popularTags = ["Technology", "AI", "Web Design", "Marketing", "Business", "Development", "Tutorial"];
  
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
    <div className="space-y-6">
      {/* Search Box */}
      <BlogSearch />

      {/* Categories Card */}
      <Card className="overflow-hidden bg-white shadow-sm">
        <div className="p-5 bg-gray-50 flex items-center space-x-2 border-b border-gray-100">
          <Bookmark className="h-5 w-5 text-pyn-blue" />
          <h3 className="text-lg font-bold text-gray-900">Categories</h3>
        </div>
        
        <div className="divide-y divide-gray-100">
          <Link 
            to="/blogs"
            className={`flex items-center justify-between p-4 transition-colors ${
              currentCategory === null 
                ? "bg-pyn-blue/10 text-pyn-blue" 
                : "hover:bg-gray-50 text-gray-700 hover:text-pyn-blue"
            }`}
          >
            <span className="transition-colors font-medium">All Categories</span>
            <span className={`text-sm px-2 py-1 rounded-full ${
              currentCategory === null
                ? "bg-pyn-blue text-white"
                : "bg-gray-100 text-gray-600"
            } transition-colors`}>
              {blogPosts.length}
            </span>
          </Link>
          
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/blogs?category=${encodeURIComponent(category.name)}`}
              className={`flex items-center justify-between p-4 transition-colors ${
                currentCategory === category.name 
                  ? "bg-pyn-blue/10 text-pyn-blue" 
                  : "hover:bg-gray-50 text-gray-700 hover:text-pyn-blue"
              }`}
            >
              <span className="transition-colors font-medium">
                {category.name}
              </span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                currentCategory === category.name
                  ? "bg-pyn-blue text-white"
                  : "bg-gray-100 text-gray-600"
              } transition-colors`}>
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </Card>

      {/* Recent Posts */}
      <Card className="overflow-hidden bg-white shadow-sm">
        <div className="p-5 bg-gray-50 flex items-center space-x-2 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">Recent Posts</h3>
        </div>
        
        <div className="divide-y divide-gray-100">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blogs/${post.id}`}
              className="flex p-4 hover:bg-gray-50 transition-colors"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded shadow-sm"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80";
                }}
              />
              
              <div className="ml-4">
                <h4 className="font-medium text-sm line-clamp-3 hover:text-pyn-blue transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </Card>
      
      {/* Tags Section */}
      <Card className="overflow-hidden bg-white shadow-sm">
        <div className="p-5 bg-gray-50 flex items-center space-x-2 border-b border-gray-100">
          <Tag className="h-5 w-5 text-pyn-blue" />
          <h3 className="text-lg font-bold text-gray-900">Popular Tags</h3>
        </div>
        
        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Link
                key={tag}
                to={`/blogs?tag=${encodeURIComponent(tag)}`}
                className="inline-block bg-gray-100 hover:bg-pyn-blue/10 text-gray-700 hover:text-pyn-blue px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogSidebar;
