
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">Last Updated: April 25, 2025</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you browse websites. 
            They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <p>We use cookies for various purposes including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Essential cookies: These are necessary for the website to function properly</li>
            <li>Analytical cookies: These help us understand how visitors interact with our website</li>
            <li>Functional cookies: These enable enhanced functionality and personalization</li>
            <li>Targeting cookies: These record your visit to our website and track your browsing habits</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can usually find these 
            settings in the 'Options' or 'Preferences' menu of your browser.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us at:
            <br />
            <a href="mailto:privacy@pyntechnologies.com" className="text-pyn-blue hover:underline">
              privacy@pyntechnologies.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
