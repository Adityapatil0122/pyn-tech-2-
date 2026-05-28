
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Disclaimer</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">Last Updated: April 25, 2025</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Information Accuracy</h2>
          <p>
            The information provided on this website is for general informational purposes only. We make no 
            representations or warranties of any kind, express or implied, about the completeness, accuracy, 
            reliability, suitability, or availability of the information contained on the website.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. External Links</h2>
          <p>
            Our website may contain links to external websites that are not provided or maintained by us. 
            We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on 
            these external websites.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Professional Advice</h2>
          <p>
            The information on this website should not be considered as professional advice. We encourage 
            you to consult with appropriate professionals for specific advice tailored to your situation.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have questions about this disclaimer, please contact us at:
            <br />
            <a href="mailto:legal@pyntechnologies.com" className="text-pyn-blue hover:underline">
              legal@pyntechnologies.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
