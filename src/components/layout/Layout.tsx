
import { lazy, Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContactDialog } from "../contact";
import WhatsAppButton from "../WhatsAppButton";
import ScrollToTopButton from "../ScrollToTopButton";
import CookieConsent from "../CookieConsent";

const PynAIAssistant = lazy(() => import("../PynAIAssistant"));

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout?: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const Layout = () => {
  const [showAssistant, setShowAssistant] = useState(false);

  useEffect(() => {
    const win = window as IdleWindow;

    if (typeof win.requestIdleCallback === "function") {
      const idleId = win.requestIdleCallback(() => setShowAssistant(true), { timeout: 2500 });
      return () => win.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(() => setShowAssistant(true), 1600);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="relative z-10 flex-grow w-full pt-16 md:pt-[68px]">
        <Suspense fallback={<div className="min-h-[calc(100vh-68px)]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ContactDialog />
      {showAssistant ? (
        <Suspense fallback={null}>
          <PynAIAssistant />
        </Suspense>
      ) : null}
      <WhatsAppButton />
      <ScrollToTopButton />
      <CookieConsent />
    </div>
  );
};

export default Layout;
