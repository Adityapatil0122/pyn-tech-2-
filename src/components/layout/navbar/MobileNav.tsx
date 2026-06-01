
import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { aiSolutions, webServices, productItems } from "./navItems";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-x-0 bottom-0 top-[56px] z-40 overflow-y-auto border-t border-pyn-blue/10 bg-white pb-safe-area-inset-bottom lg:hidden"
          initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="flex max-h-full flex-col space-y-3 py-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.035 } },
            }}
          >
            <div className="px-4 py-2">
              <h3 className="mb-2 text-sm font-semibold text-pyn-dark">AI Solutions</h3>
              <div className="space-y-2 pl-2">
                {aiSolutions.map((item) => (
                  <motion.div key={item.link} variants={itemVariants}>
                    <Link
                      to={item.link}
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-pyn-gray"
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="px-4 py-2">
              <h3 className="mb-2 text-sm font-semibold text-pyn-dark">Web Services</h3>
              <div className="space-y-2 pl-2">
                {webServices.map((item) => (
                  <motion.div key={item.link} variants={itemVariants}>
                    <Link
                      to={item.link}
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-pyn-gray"
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="px-4 py-2">
              <h3 className="mb-2 text-sm font-semibold text-pyn-dark">Products</h3>
              <div className="space-y-2 pl-2">
                {productItems.map((item) => (
                  <motion.div key={item.link} variants={itemVariants}>
                    <Link
                      to={item.link}
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-pyn-gray"
                      onClick={onClose}
                    >
                      {item.title} {item.description.includes("Coming Soon") && <span className="ml-1 text-xs text-pyn-blue">(Coming Soon)</span>}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {[
              { label: "Our Clients", to: "/clients" },
              { label: "Blogs", to: "/blogs" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <motion.div key={item.to} variants={itemVariants}>
                <Link to={item.to} className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-pyn-gray" onClick={onClose}>
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div className="px-4 py-2" variants={itemVariants}>
              <Button
                className="w-full bg-pyn-dark hover:bg-pyn-darkBlue"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-contact'));
                  onClose();
                }}
              >
                Let's Talk
              </Button>
            </motion.div>

            <div className="h-4" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
