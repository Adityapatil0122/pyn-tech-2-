
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/newBlogPosts";

interface BlogRelatedPostsProps {
  posts: BlogPost[];
}

const BlogRelatedPosts = ({ posts }: BlogRelatedPostsProps) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
      
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link key={post.id} to={`/blogs/${post.id}`} className="group">
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 rounded object-cover group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80";
                  }}
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-pyn-blue transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogRelatedPosts;
