
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">Last Updated: April 25, 2025</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services offered by Pyn Technologies ("we", "our", or "us"), 
            you agree to comply with and be bound by these Terms of Service. If you do not agree to these 
            terms, please do not use our services.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Services</h2>
          <p>
            Pyn Technologies provides various digital services including but not limited to website 
            development, app development, digital marketing, and AI solutions as described on our website.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
          <p>Users of our services agree to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of their account information</li>
            <li>Use our services in compliance with all applicable laws</li>
            <li>Not engage in any activity that disrupts or interferes with our services</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have questions or concerns about these Terms of Service, please contact us at:
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

export default TermsOfService;
