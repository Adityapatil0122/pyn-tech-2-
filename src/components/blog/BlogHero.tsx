
import { BlogPost } from "@/data/newBlogPosts";
import { Calendar } from "lucide-react";

interface BlogHeroProps {
  post: BlogPost;
}

const BlogHero = ({ post }: BlogHeroProps) => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[50vh] md:h-[65vh] flex items-center">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      ></div>
      
      {/* Blue gradient overlay - adjusted for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-pyn-blue/90 via-pyn-blue/70 to-pyn-blue/40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block bg-white text-pyn-blue px-4 py-1 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              {post.category}
            </span>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-white/90">
              <div className="flex items-center">
                <span className="font-medium">{post.author}</span>
              </div>
              
              <div className="flex items-center text-white/70 text-sm md:border-l md:border-white/20 md:pl-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
