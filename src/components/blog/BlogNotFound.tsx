
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-32">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
            alt="Blog not found"
            className="w-40 h-40 object-cover rounded-full mx-auto"
          />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Article Not Found</h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the blog post you're looking for. It may have been removed or doesn't exist.
        </p>
        
        <Link
          to="/blogs"
          className="inline-flex items-center px-6 py-3 bg-pyn-blue text-white rounded-lg hover:bg-pyn-darkBlue transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all articles
        </Link>
      </div>
    </div>
  );
};

export default BlogNotFound;
