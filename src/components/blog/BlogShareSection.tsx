
import { Facebook, X, Link } from "lucide-react";
import { BlogPost } from "@/data/newBlogPosts";
import { toast } from "sonner";

interface BlogShareSectionProps {
  post: BlogPost;
}

const BlogShareSection = ({ post }: BlogShareSectionProps) => {
  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    let shareLink = "";

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case "whatsapp":
        shareLink = `https://wa.me/?text=${encodeURIComponent(
          `${shareTitle} ${shareUrl}`
        )}`;
        break;
      default:
        if (navigator.share) {
          navigator
            .share({
              title: shareTitle,
              url: shareUrl,
            })
            .catch((error) => console.error("Error sharing:", error));
        }
        return;
    }

    window.open(shareLink, "_blank", "noopener,noreferrer");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      <div className="flex flex-col items-start">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
        
        <div className="flex space-x-3">
          <button
            onClick={() => handleShare("facebook")}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#1877F2] text-white hover:bg-[#0e65d5] transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-4 h-4" />
            <span>Facebook</span>
          </button>
          
          <button
            onClick={() => handleShare("twitter")}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#1DA1F2] text-white hover:bg-[#0d8ad9] transition-colors"
            aria-label="Share on Twitter"
          >
            <X className="w-4 h-4" />
            <span>X</span>
          </button>
          
          <button
            onClick={() => handleShare("whatsapp")}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#25D366] text-white hover:bg-[#1fb855] transition-colors"
            aria-label="Share on WhatsApp"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
              </svg>
              <span>WhatsApp</span>
            </span>
          </button>
          
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="Copy Link"
          >
            <Link className="w-4 h-4" />
            <span>Copy Link</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogShareSection;
