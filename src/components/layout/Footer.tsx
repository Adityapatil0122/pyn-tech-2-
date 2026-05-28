import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-pyn-dark text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/pyn-mark.svg" alt="Pyn Technologies" className="h-11 w-11" />
              <div>
                <div className="text-xl font-bold leading-tight">Pyn Technologies</div>
                <div className="text-xs font-semibold uppercase text-pyn-lightBlue">
                  Digital Systems
                </div>
              </div>
            </Link>

            <p className="mb-5 mt-5 text-left leading-relaxed text-slate-300">
              We design, build, automate, and grow digital products for teams that need practical technology with a sharp business edge.
            </p>

            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-pyn-amber" /> +91 9960756292
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-pyn-amber" /> contact@pyntechnologies.com
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-pyn-amber" /> Pune, Maharashtra
              </p>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-left font-semibold text-white">Connect with Us</p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61557679396584&mibextid=ZbWKw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 text-slate-300 transition-colors hover:bg-pyn-blue hover:text-white"
                  aria-label="Pyn Technologies on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/pyn_technologies?igsh=aG1qN2puN3ZubjI0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 text-slate-300 transition-colors hover:bg-pyn-blue hover:text-white"
                  aria-label="Pyn Technologies on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/10 p-2 text-slate-300 transition-colors hover:bg-pyn-blue hover:text-white"
                  aria-label="Pyn Technologies on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-left text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Home</Link></li>
              <li><Link to="/clients" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Our Clients</Link></li>
              <li><Link to="/blogs" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Blogs</Link></li>
              <li><Link to="/contact" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Contact</Link></li>
              <li><Link to="/privacy-policy" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-left text-lg font-semibold text-white">AI Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/ai/chatbots" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">AI-Powered Chatbots</Link></li>
              <li><Link to="/ai/custom-solutions" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Custom AI Solutions</Link></li>
              <li><Link to="/ai/integration" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">AI Integration & API</Link></li>
              <li><Link to="/ai/analytics" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Data Analytics & Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-left text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/website-development" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Website Development</Link></li>
              <li><Link to="/services/app-development" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">App Development</Link></li>
              <li><Link to="/services/digital-marketing" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Digital Marketing</Link></li>
              <li><Link to="/services/whatsapp-business" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">WhatsApp Business API</Link></li>
              <li><Link to="/services/ui-ux-design" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">UI/UX Design</Link></li>
              <li><Link to="/services/graphics-designing" className="block text-left text-slate-300 transition-colors hover:text-pyn-lightBlue">Graphics Designing</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-2 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} Pyn Technologies. All Rights Reserved.</p>
          <p>AI, web, app, automation, design, and growth systems.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
