
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">Last Updated: April 25, 2025</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Pyn Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy 
            Policy explains how we collect, use, disclose, and safeguard your information when you use our 
            website and services.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information about our services</li>
            <li>Contact us directly</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you about our services</li>
            <li>Process your transactions</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
