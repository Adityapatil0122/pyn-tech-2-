
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/919960756292?text=Hello%20Pyn%20Technologies,%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-pyn-blue text-white shadow-lg transition-colors duration-300 hover:bg-pyn-darkBlue"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-full h-full p-3" strokeWidth={2} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
