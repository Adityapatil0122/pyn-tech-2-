
import { BlogPost } from "@/data/newBlogPosts";

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent = ({ post }: BlogContentProps) => {
  // Function to format content with consistent spacing and first paragraph bold
  const formatContent = (content: string): string => {
    // Split content into paragraphs
    const paragraphs = content.split('</p>').filter(p => p.trim().length > 0);
    
    // Process each paragraph
    const formattedParagraphs = paragraphs.map((p, index) => {
      const cleanParagraph = p.replace(/^<p>/, '').trim();
      if (!cleanParagraph) return '';
      
      // All paragraphs use same styling now, no bold for first paragraph
      const paragraphClass = 'mb-6 text-gray-800 text-base md:text-lg leading-relaxed font-normal';
      
      return `<p class="${paragraphClass}">${cleanParagraph}</p>`;
    });
    
    // Add styled headings and other elements
    let formattedContent = formattedParagraphs.join('\n\n');
    formattedContent = formattedContent
      .replace(/<h2>(.*?)<\/h2>/g, '<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-5">$1</h2>')
      .replace(/<h3>(.*?)<\/h3>/g, '<h3 class="text-xl md:text-2xl font-normal text-gray-900 mt-8 mb-4">$1</h3>')
      .replace(/<blockquote>(.*?)<\/blockquote>/g, '<blockquote class="border-l-4 border-pyn-blue pl-4 md:pl-6 py-2 my-6 text-gray-700 italic font-normal">$1</blockquote>');
    
    return formattedContent;
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 overflow-hidden">
      {/* Featured Image - Removing header section with author/date */}
      <div className="mb-10 md:mb-12">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto md:h-[400px] object-cover rounded-xl shadow-lg"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80";
          }}
        />
      </div>

      {/* Excerpt Section */}
      <div className="mb-8 md:mb-12 bg-gray-50 rounded-xl p-4 md:p-8">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic font-normal">{post.excerpt}</p>
      </div>

      {/* Main Content */}
      <div
        className="prose prose-lg max-w-none
                  prose-a:text-pyn-blue hover:prose-a:text-pyn-darkBlue prose-a:font-normal prose-a:transition-colors
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:max-w-full
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6
                  prose-li:text-gray-800 prose-li:mb-2"
        dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
      />
    </article>
  );
};

export default BlogContent;
