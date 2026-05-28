
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import blogPosts from "@/data/newBlogPosts";
import BlogNotFound from "@/components/blog/BlogNotFound";
import BlogContent from "@/components/blog/BlogContent";
import BlogHero from "@/components/blog/BlogHero";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogShareSection from "@/components/blog/BlogShareSection";
import BlogRelatedPosts from "@/components/blog/BlogRelatedPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === parseInt(id || "0"));
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <BlogNotFound />;
  }

  // Find related posts (same category, exclude current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen pb-16 overflow-x-hidden">
      {/* Hero Banner with Blue Image Overlay */}
      <BlogHero post={post} />
      
      <div className="container mx-auto px-4 max-w-6xl pt-6 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-sm p-5 md:p-10">
              {/* Blog Content Component */}
              <BlogContent post={post} />
              
              {/* Share Section */}
              <BlogShareSection post={post} />
              
              {/* Related Posts (Mobile only) */}
              <div className="mt-10 lg:hidden">
                <h3 className="text-xl font-bold mb-6">You might also enjoy</h3>
                <BlogRelatedPosts posts={relatedPosts} />
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <BlogSidebar currentCategory={post.category} />
              
              {/* Related Posts (Desktop only) */}
              <div className="mt-8 hidden lg:block">
                <BlogRelatedPosts posts={relatedPosts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
