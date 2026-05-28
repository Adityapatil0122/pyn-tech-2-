
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Refund Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">Last Updated: April 25, 2025</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Service Satisfaction</h2>
          <p>
            At Pyn Technologies, we are committed to ensuring your satisfaction with our services. 
            If you are not satisfied with our services, please contact us to discuss your concerns.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Refund Eligibility</h2>
          <p>Refunds may be considered in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Services not delivered as specified in the agreement</li>
            <li>Technical issues with deliverables that cannot be resolved</li>
            <li>Cancellation of services before work has begun (administrative fee may apply)</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Refund Process</h2>
          <p>
            To request a refund, please contact us in writing explaining the reason for your request. 
            We will review each case individually and respond within 5 business days.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p>
            For refund requests or questions about this policy, please contact us at:
            <br />
            <a href="mailto:billing@pyntechnologies.com" className="text-pyn-blue hover:underline">
              billing@pyntechnologies.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
