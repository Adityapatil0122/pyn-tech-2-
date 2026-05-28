
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the 404 error with the path for monitoring
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // You could also send this to an analytics service
    // if you implement one in the future
    
    // Add page title for SEO and accessibility
    document.title = "Page Not Found | Pyn Technologies";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pyn-gray py-20">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-pyn-blue mb-6">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</p>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link to="/" className="bg-pyn-blue hover:bg-pyn-darkBlue">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
