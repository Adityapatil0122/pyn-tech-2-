
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AcceptableUse = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Acceptable Use Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">Last Updated: April 25, 2025</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Prohibited Activities</h2>
          <p>
            When using our services or website, you agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the intellectual property rights of others</li>
            <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
            <li>Attempt to gain unauthorized access to any part of our services</li>
            <li>Use our services for any fraudulent or deceptive purposes</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Content Restrictions</h2>
          <p>
            You agree not to upload, share, or otherwise make available any content that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Contains malware, viruses, or other malicious code</li>
            <li>Is illegal, harmful, or discriminatory</li>
            <li>Infringes on any third party's rights</li>
            <li>Violates data privacy or security laws</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Enforcement</h2>
          <p>
            We reserve the right to investigate and take appropriate action against any violations of this 
            Acceptable Use Policy, including terminating your access to our services and pursuing legal 
            remedies.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have questions about this Acceptable Use Policy, please contact us at:
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

export default AcceptableUse;
