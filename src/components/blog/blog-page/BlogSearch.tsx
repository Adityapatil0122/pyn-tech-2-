
import React from "react";
import { Search } from "lucide-react";

const BlogSearch = () => {
  return (
    <div className="mb-8">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search articles..." 
          className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pyn-blue/30 focus:border-pyn-blue shadow-sm"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pyn-blue text-white px-4 py-1 rounded-md hover:bg-pyn-darkBlue transition-colors text-sm">
          Search
        </button>
      </div>
    </div>
  );
};

export default BlogSearch;
