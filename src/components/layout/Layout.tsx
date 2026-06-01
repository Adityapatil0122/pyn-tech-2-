
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContactDialog } from "../contact";
import PynAIAssistant from "../PynAIAssistant";
import WhatsAppButton from "../WhatsAppButton";
import ScrollToTopButton from "../ScrollToTopButton";
import CookieConsent from "../CookieConsent";
import { AmbientMotion, PageLoader, PageTransition, ScrollProgress } from "../motion/SiteMotion";

const Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden">
      <ScrollProgress />
      <AmbientMotion />
      <Navbar />
      <main className="relative z-10 flex-grow w-full pt-16 md:pt-[68px]">
        <PageTransition>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </PageTransition>
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
