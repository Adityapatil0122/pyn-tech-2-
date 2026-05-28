
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import blogPosts from "@/data/newBlogPosts";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogHeader from "@/components/blog/blog-page/BlogHeader";
import BlogContent from "@/components/blog/blog-page/BlogContent";

const BlogsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFromUrl);
  const postsPerPage = 6;

  // Filter posts by active category if selected
  let filteredPosts = activeCategory 
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Get current posts for pagination
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Update category when URL param changes
  useEffect(() => {
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  // Scroll to top when page or category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, activeCategory]);

  // Function to set category and update URL
  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <BlogHeader />

      {/* Blog Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content (70%) */}
            <BlogContent 
              currentPosts={currentPosts}
              activeCategory={activeCategory}
              currentPage={currentPage}
              totalPages={totalPages}
              handleCategoryChange={handleCategoryChange}
              setCurrentPage={setCurrentPage}
            />

            {/* Sidebar (30%) */}
            <div className="lg:w-1/3">
              <BlogSidebar currentCategory={activeCategory} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
