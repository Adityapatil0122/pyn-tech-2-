
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContactDialog } from "../contact";
import PynAIAssistant from "../PynAIAssistant";
import WhatsAppButton from "../WhatsAppButton";
import ScrollToTopButton from "../ScrollToTopButton";
import CookieConsent from "../CookieConsent";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ContactDialog />
      <PynAIAssistant />
      <WhatsAppButton />
      <ScrollToTopButton />
      <CookieConsent />
    </div>
  );
};

export default Layout;
